import { Controller, Get, Res, Injectable } from '@nestjs/common';
import {
  ApiResponse,
  ApiExcludeEndpoint,
  ApiOperation,
  ApiTags,
  DocumentBuilder,
} from '@nestjs/swagger';
import { Response } from 'express';
import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import * as fs from 'fs';
import { AppModule } from './app.module';

@Injectable()
export class SwaggerService {
  constructor(private readonly reflector: Reflector) {}

  async getSwaggerDocument() {
    const app = await NestFactory.create(AppModule);
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder().build(),
    );

    return document;
  }
}

@Controller('/doc')
export class SwaggerController {
  constructor(private readonly swaggerService: SwaggerService) {}

  @Get('json')
  @ApiTags('Swagger')
  @ApiOperation({ summary: 'Get Swagger JSON' })
  @ApiResponse({ status: 200, description: 'Swagger JSON' })
  async getSwaggerJson(@Res() res: Response) {
    const swaggerDocument = await this.swaggerService.getSwaggerDocument();
    const jsonFilePath = 'swagger.json'; // Đường dẫn tới nơi lưu trữ tệp JSON
    fs.writeFileSync(jsonFilePath, JSON.stringify(swaggerDocument, null, 2));
    res.download(jsonFilePath);
  }
}
