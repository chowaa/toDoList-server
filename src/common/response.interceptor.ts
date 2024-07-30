// src/common/response.interceptor.ts
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ResponseWrapper } from './response'

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, ResponseWrapper<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseWrapper<T>> {
    return next.handle().pipe(
      map((data) => {
        return new ResponseWrapper(200, 'success', data)
      })
    )
  }
}
