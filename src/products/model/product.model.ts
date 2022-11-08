import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreateAttrs {
  title: string
  price: number
}

@ObjectType()
@Table({ tableName: 'products', createdAt: true, updatedAt: true })
export class Product extends Model<Product, UserCreateAttrs> {
  @Field(() => ID)
  @ApiProperty({ description: 'ID Product', example: '1' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @Field()
  @ApiProperty({ description: 'Title Product', example: 'name' })
  @Column({ type: DataType.STRING })
  title: string;

  @Field()
  @ApiProperty({ description: 'Price Product', example: '10000' })
  @Column({ type: DataType.INTEGER })
  price: number;
}