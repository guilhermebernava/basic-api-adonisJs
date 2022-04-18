/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { Exception } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }
  //vai verificar todos os EXPECTION jogados pela API
  public async handle(error: Exception, ctx: HttpContextContract) {
    //se der algum ERRO 401 na API ele vai cair dentro desse IF
    if (error.status === 401) {
      return ctx.response.status(error.status).send({
        code: 'UNAUTHORIZE',
        message: 'YOU ARE NOT AUTHORIZED TO USE THIS RESOURCE',
      })
    } else if (error.status === 400) {
      return ctx.response.status(error.status).send({
        code: 'BAD_REQUEST',
        message: 'YOU ARE SENDING SOMETHING WRONG IN YOUR REQUEST BODY',
      })
    }
  }
}
