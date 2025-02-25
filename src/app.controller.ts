import { Controller, Get } from '@nestjs/common';
// biome-ignore lint/style/useImportType: <It used for the constructor, so it has to be ignored>
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
