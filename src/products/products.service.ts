import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
// import { InjectModel } from "@nestjs/mongoose";
// import { Model } from "mongoose";
// import { Product, ProductDocument } from "./schemas/product.schema";

import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./model/product.model";

@Injectable()
export class ProductsService {
  //constructor (@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}
constructor (@InjectModel(Product) private readonly productRepository: typeof Product) {}

  async getAll(): Promise<Product[]> {
    // return this.productModel.find().exec()
    return await this.productRepository
    .findAll<Product>({ include: { all: true }})
  }

  async getById(id: string): Promise<Product> {
    //return this.productModel.findById(id)
    return await this.productRepository
    .findByPk<Product>(+id)
  }

  async create(productDto: CreateProductDto): Promise<Product> {
    //const newProduct = new this.productModel(productDto)
    //return newProduct.save()
    if (!productDto.price || !productDto.title) {
      throw 'Price or Title not specified'
    }
    return await this.productRepository
    .create<Product>(productDto)
  }

  async remove(id: string): Promise<string> {
    //return this.productModel.findByIdAndRemove(id)
    const count = await this.productRepository
    .destroy<Product>({ where: { id: +id }})
    return count > 0
      ? `Deleted product by id${id}`
      : `No deleted product by id${id}`
  }

  async update(id: string, productDto: UpdateProductDto): Promise<Product> {
    //return this.productModel.findByIdAndUpdate(id, productDto, { new: true })
    if (!productDto.price || !productDto.title) {
      throw 'Price or Title not specified'
    }
    const product = await this.getById(id)
    product.set(productDto)
    return await product.save()
  }
}
