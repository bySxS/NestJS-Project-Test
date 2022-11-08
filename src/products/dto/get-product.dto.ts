import { ApiProperty } from "@nestjs/swagger";
import { IsNumberString } from 'class-validator';

export class FindOneParams {
  @ApiProperty({ description: 'ID Product', example: '1' })
  @IsNumberString()
  id: string;
}
