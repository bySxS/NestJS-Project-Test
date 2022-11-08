import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateProductDto {
  @ApiProperty({ description: 'Title Product', example: 'name' })
  @IsNotEmpty()
  readonly title: string

  @ApiProperty({ description: 'Price Product', example: '10000' })
  @IsNumber()
  @IsNotEmpty()
  readonly price: number
}