import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Todo, TodoDocument } from './todo.schema'
import { createTodoDto, UpdateTodoDto } from './create-todo.dto'

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async create(createTodoDto: createTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto)
    return createdTodo.save()
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec()
  }

  async findOne(name: string): Promise<Todo> {
    return this.todoModel.findOne({ name: name }).exec()
  }

  async update(name: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(name, updateTodoDto, { new: true }).exec()
  }

  async updatePersonById(name: string, updatePersonDto: UpdateTodoDto): Promise<Todo> {
    console.log(name)
    return this.todoModel.findOneAndUpdate({ name: name }, updatePersonDto, { new: true }).exec()
  }

  // 添加其他方法，如 findOne, update, delete 等
}
