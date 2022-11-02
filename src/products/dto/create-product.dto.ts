import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  readonly title: string
  @IsNumber()
  @IsNotEmpty()
  readonly price: number
}