// src/common/exceptions/custom.exception.ts
import { HttpException, HttpStatus } from '@nestjs/common'

export class CustomException extends HttpException {
  constructor(message: string, statusCode: number = HttpStatus.BAD_REQUEST) {
    super({ code: statusCode, message }, statusCode)
  }
}
