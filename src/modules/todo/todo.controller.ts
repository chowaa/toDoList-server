import { Controller, Get, Post, Param, Put, Delete, Body } from '@nestjs/common'
import { TodoService } from './todo.service'
import { CreateTodoDto, UpdateTodoDto } from './todo.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('todoList')
@Controller('todoList')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiOperation({ summary: '获取所有待办事项' })
  @Get()
  async findAllTodoList() {
    const data = await this.todoService.findAll()
    return {
      data: data,
      title: '获取所有待办事项',
      success: true
    }
  }

  @ApiOperation({ summary: '创建一个待办事项' })
  @Post()
  async createTodoList(@Body() createTodoDto: CreateTodoDto) {
    console.log(createTodoDto)
    await this.todoService.create(createTodoDto)
    return {
      title: '创建一个待办事项',
      success: true
    }
  }

  @ApiOperation({ summary: '修改一个待办事项' })
  @Put(':id')
  async updateTodoList(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    await this.todoService.updateById(id, updateTodoDto)
    return {
      // data: data,
      title: '修改一个待办事项',
      body: updateTodoDto,
      params: id,
      success: true
    }
  }

  @ApiOperation({ summary: '删除一个待办事项' })
  @Delete(':id')
  async deleteTodoList(@Param('id') id: string) {
    await this.todoService.removeById(id)
    return {
      title: '修改一个待办事项',
      id: id,
      success: true
    }
  }
}
