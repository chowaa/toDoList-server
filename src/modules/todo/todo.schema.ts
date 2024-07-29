import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type TodoDocument = Todo & Document

@Schema()
export class Todo {
  @Prop() // 确保 `name` 是唯一的
  title: string

  @Prop()
  content: string

  @Prop()
  createdAt: string

  @Prop()
  effectiveTime: string

  @Prop()
  isCompleted: boolean

  @Prop()
  completedTime: string
}

export const TodoSchema = SchemaFactory.createForClass(Todo)
