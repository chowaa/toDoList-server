// src/common/filters/custom-exception.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Request, Response } from 'express'
import { ResponseWrapper } from '../response'

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()
    const exceptionResponse = exception.getResponse()

    console.log(request)
    let message = 'Internal Server Error'
    let code = status

    if (typeof exceptionResponse === 'object') {
      message = (exceptionResponse as any).message || message
      code = (exceptionResponse as any).code || code
    }

    response.status(status).json(new ResponseWrapper(code, message))
  }
}
