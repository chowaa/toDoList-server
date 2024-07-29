import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Todo, TodoDocument } from './todo.schema'
import { CreateTodoDto, UpdateTodoDto } from './todo.dto'

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto)
    return createdTodo.save()
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec()
  }

  async findOneById(_id: string): Promise<Todo> {
    return this.todoModel.findById(_id).exec()
  }

  async updateById(_id: string, updatePersonDto: UpdateTodoDto): Promise<Todo> {
    console.log(_id)
    return this.todoModel.findOneAndUpdate({ _id: _id }, updatePersonDto, { new: true }).exec()
  }

  async removeById(_id: string): Promise<Todo> {
    return this.todoModel.findByIdAndDelete(_id).exec()
  }

  // 添加其他方法，如 findOne, update, delete 等
}
