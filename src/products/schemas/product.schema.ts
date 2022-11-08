import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type ProductDocument = Product & Document

@Schema()
export class Product {
  @ApiProperty({ description: 'Title Product', example: 'name' })
  @Prop()
  title: string

  @ApiProperty({ description: 'Price Product', example: '11000' })
  @Prop()
  price: number
}

export const ProductSchema = SchemaFactory.createForClass(Product)
