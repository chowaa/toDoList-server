import { IsString, IsOptional } from 'class-validator'

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  readonly name?: string

  @IsOptional()
  @IsString()
  readonly age?: string
}

export class createTodoDto {
  readonly name: string
  readonly age?: string
}
