import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('TodoList_API')
    .setDescription('The TodoList API description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('TodoList_api', app, document)
  console.log('server start in http://localhost:3000/')
  console.log('Swagger start in http://localhost:3000/TodoList_api')
  await app.listen(3000)
}
bootstrap()
