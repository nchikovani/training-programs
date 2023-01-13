import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  console.log(66);
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('training-programs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(Number(process.env.PORT));
}
bootstrap();
