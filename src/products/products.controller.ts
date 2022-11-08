import {
  Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateProductDto } from "./dto/create-product.dto";
import { FindOneParams } from "./dto/get-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsService } from "./products.service";
import { Product } from "./schemas/product.schema";

@ApiTags('API Products')
@Controller('api/products')
export class ProductsController {
  constructor (private readonly productService: ProductsService) {}

  @ApiOperation({ summary: 'get Products' })
  @ApiResponse({ status: HttpStatus.OK, type: [Product] })
  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.getAll()
  }

  @ApiOperation({ summary: 'Redirect To get First Product' })
  @ApiResponse({ status: HttpStatus.MOVED_PERMANENTLY, type: Product })
  @Get('/redirect')
  @Redirect('http://localhost:3000/products/1', HttpStatus.MOVED_PERMANENTLY)
  redirect(): string {
    return 'redirect'
  }

  @ApiOperation({ summary: 'get One Product' })
  @ApiResponse({ status: HttpStatus.OK, type: Product })
  @Get(':id')
  getById(@Param('id') params: FindOneParams): Promise<Product> {
    return this.productService.getById(params.id)
  }

  @ApiOperation({ summary: 'get Created Product' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Product })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto)
  }

  @ApiOperation({ summary: 'get Deleted Product' })
  @ApiResponse({ status: HttpStatus.OK, type: Product })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<string> {
    return this.productService.remove(id)
  }

  @ApiOperation({ summary: 'get Changed Product' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Product })
  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
    return this.productService.update(id, updateProductDto)
  }

}
