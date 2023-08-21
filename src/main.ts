import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = new DocumentBuilder()
    .setTitle('TĐ shop api')
    .setDescription('The ecomerce API description')
    .addBearerAuth()
    .addCookieAuth('refreshToken')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.setViewEngine('pug');
  app.setBaseViewsDir(join(__dirname, '..', './src/payment/views'));
  app.enableCors({
    origin: [process.env.CLIENT_URL],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.useStaticAssets(join(__dirname, '..', './public'));
  const PORT = process.env.PORT || 8080;
  await app.listen(PORT);
}
bootstrap();
