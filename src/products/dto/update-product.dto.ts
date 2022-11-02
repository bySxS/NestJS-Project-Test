import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateProductDto {
  @IsNotEmpty()
  readonly title: string
  @IsNumber()
  @IsNotEmpty()
  readonly price: number
}