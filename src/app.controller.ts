import { Controller, Get, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AppService } from './app.service';

@ApiTags('API Home')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Page Welcome' })
  @ApiResponse({ status: HttpStatus.OK })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
