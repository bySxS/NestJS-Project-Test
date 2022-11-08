import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { Product, ProductSchema } from "./schemas/product.schema";
import { Product as ProductModel } from './model/product.model'
import { ProductResolver } from './resolvers/product/product.resolver';

@Module({
  providers: [ProductsService, ProductResolver],
  controllers: [ProductsController],
  imports: [
    // MongooseModule.forFeature([{
    //   name: Product.name, schema: ProductSchema
    // }]),
    SequelizeModule.forFeature([
      ProductModel
    ]),

  ]
})
export class ProductsModule {}
