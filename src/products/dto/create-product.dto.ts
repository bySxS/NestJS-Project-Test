import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class CreateProductDto {
  @Field()
  @ApiProperty({ description: 'Title Product', example: 'Name' })
  @IsNotEmpty()
  readonly title: string

  @Field()
  @ApiProperty({ description: 'Price Product', example: '10000' })
  @IsNumber()
  @IsNotEmpty()
  readonly price: number
}