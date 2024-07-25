import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type TodoDocument = Todo & Document

@Schema()
export class Todo {
  @Prop({ unique: true }) // 确保 `name` 是唯一的
  name: string

  @Prop()
  age: string
}

export const TodoSchema = SchemaFactory.createForClass(Todo)
