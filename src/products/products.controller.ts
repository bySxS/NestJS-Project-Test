import {
  Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller('products')
export class ProductsController {

  @Get()
  getAll(): string {
    return 'getAll products'
  }

  @Get('/redirect')
  @Redirect('http://localhost:3000/products/1', HttpStatus.MOVED_PERMANENTLY)
  redirect() {
    return 'redirect'
  }

  @Get(':id')
  getById(@Param('id') id: string): string {
    return 'getById ' + id
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto): string {
    return `create title: ${createProductDto.title} price: ${createProductDto.price}`
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return 'removeProduct ' + id
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): string {
    return 'updateProduct ' + id
  }

}
