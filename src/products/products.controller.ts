import {
  Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { FindOneParams } from "./dto/get-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsService } from "./products.service";
import { Product } from "./schemas/product.schema";

@Controller('products')
export class ProductsController {
  constructor (private readonly productService: ProductsService) {}

  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.getAll()
  }

  @Get('/redirect')
  @Redirect('http://localhost:3000/products/1', HttpStatus.MOVED_PERMANENTLY)
  redirect(): string {
    return 'redirect'
  }

  @Get(':id')
  getById(@Param('id') params: FindOneParams): Promise<Product> {
    return this.productService.getById(params.id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.productService.remove(id)
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
    return this.productService.update(id, updateProductDto)
  }

}
