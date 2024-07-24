// src/database.module.ts
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'your_username',
      password: 'your_password',
      database: 'todo_app',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true // 开发环境下自动同步表结构
    })
  ]
})
export class DatabaseModule {}
