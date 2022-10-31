import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Redirect } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller('products')
export class ProductsController {

  @Get()
  // @Redirect('http://localhost:3000/products/1', 301)
  getAll(): string {
    return 'getAll products'
  }

  // @Get(':id')
  // getOne(@Param() params) {
  //   return 'getOne ' + params.id
  // }

  @Get(':id')
  getById(@Param('id') id: string): string {
    return 'getById ' + id
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
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
