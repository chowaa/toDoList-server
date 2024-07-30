import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ResponseInterceptor } from './common/response.interceptor'
import { CustomExceptionFilter } from './common/filters/custom-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true
  })

  const config = new DocumentBuilder()
    .setTitle('TodoList_API')
    .setDescription('The TodoList API description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('TodoList_api', app, document)

  app.useGlobalInterceptors(new ResponseInterceptor())
  app.useGlobalFilters(new CustomExceptionFilter())

  console.log('server start in http://localhost:3000/')
  console.log('Swagger start in http://localhost:3000/TodoList_api')

  await app.listen(3000)
}
bootstrap()
