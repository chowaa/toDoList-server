import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common'
import { TodoService } from './todo.service'
import { createTodoDto, UpdateTodoDto } from './create-todo.dto'

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: createTodoDto) {
    return this.todoService.create(createTodoDto)
  }

  @Get()
  async findAll() {
    return this.todoService.findAll()
  }

  // @Post(':name')
  // async findOne(@Param('name') name: string) {
  //   return this.todoService.findOne(name)
  // }

  @Post(':name')
  async updatePerson(@Param('name') name: string, @Body() updatePersonDto: UpdateTodoDto) {
    return this.todoService.updatePersonById(name, updatePersonDto)
  }

  // 添加其他路由，如 findOne, update, delete 等
}
