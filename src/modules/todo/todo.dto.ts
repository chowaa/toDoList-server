import { IsString, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: '待办事项名字' })
  readonly title: string

  @IsOptional()
  @IsString()
  @ApiProperty({ description: '待办事项内容' })
  readonly content: string

  @IsOptional()
  @IsString()
  @ApiProperty({ description: '创建时间' })
  readonly createdAt: string

  @IsOptional()
  @IsString()
  @ApiProperty({ description: '生效时间' })
  readonly effectiveTime?: string

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ description: '是否完成' })
  readonly isCompleted?: boolean

  @IsOptional()
  @IsString()
  @ApiProperty({ description: '完成时间' })
  readonly completedTime?: string
}

export class CreateTodoDto {
  @ApiProperty({ description: '待办事项名字', example: '待办事项名字' })
  @IsNotEmpty({message: '请填写待办事项名字'})
  readonly title: string

  @ApiProperty({ description: '待办事项内容', example: '待办事项内容' })
  readonly content: string

  @ApiProperty({ description: '创建时间', example: '创建时间' })
  readonly createdAt: string

  @ApiProperty({ description: '生效时间', example: '生效时间' })
  readonly effectiveTime?: string

  @ApiProperty({ description: '是否完成', example: false })
  readonly isCompleted?: boolean

  @ApiProperty({ description: '完成时间', example: '完成时间' })
  readonly completedTime?: string
}
