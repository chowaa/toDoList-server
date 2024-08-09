import { Controller, Get, Post, Param, Put, Delete, Body, Query } from '@nestjs/common'
import { TodoService } from './todo.service'
import { CreateTodoDto, UpdateTodoDto } from './todo.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CustomException } from '../../common/exceptions/custom.exception'

@ApiTags('todoList')
@Controller('todoList')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiOperation({ summary: '获取所有待办事项' })
  @Get()
  async findAllTodoList() {
    // const data = await this.todoService.findAll()
    return await this.todoService.findAll()
  }

  @ApiOperation({ summary: '待办事项详情' })
  @Post('/todoDetail')
  async todoDetail(@Query('id') id: string) {
    // console.log(id)
    // const data = await this.todoService.findOneById(id)
    if (!id) {
      throw new CustomException('ID is required')
    }
    return await this.todoService.findOneById(id)
  }

  @ApiOperation({ summary: '创建一个待办事项' })
  @Post('/createTodoList')
  async createTodoList(@Body() createTodoDto: CreateTodoDto) {
    console.log(createTodoDto)
    // await this.todoService.create(createTodoDto)
    return await this.todoService.create(createTodoDto)
  }

  @ApiOperation({ summary: '修改一个待办事项' })
  @Put('/updateTodoList/:id')
  async updateTodoList(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    // await this.todoService.updateById(id, updateTodoDto)
    if (!updateTodoDto.title) {
      throw new CustomException('title is required')
    }
    return await this.todoService.updateById(id, updateTodoDto)
  }

  @ApiOperation({ summary: '删除一个待办事项' })
  @Delete('/deleteTodoList/:id')
  async deleteTodoList(@Param('id') id: string) {
    // await this.todoService.removeById(id)
    return await this.todoService.removeById(id)
  }
}

// const createTodoDtoRules = (createTodoDto: CreateTodoDto) => {
//   const result = {
//     flag: false,
//     message: ''
//   }
//   const messages = []
//   if (!createTodoDto.title || createTodoDto.title === '') {
//     messages.push('title为必填')
//   }
//   if (!createTodoDto.content || createTodoDto.content === '') {
//     messages.push('content为必填')
//   }
//   if (createTodoDto.createdAt instanceof Date) {
//     messages.push('createdAt类型为Date')
//   }
//   if (createTodoDto.completedTime instanceof Date) {
//     messages.push('completedTime类型为Date')
//   }
//   if (messages.length === 0) {
//     result.flag = true
//   } else {
//     result.message = messages.join(' ')
//   }
//   return result
// }
