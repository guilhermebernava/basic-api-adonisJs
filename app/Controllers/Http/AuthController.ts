import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserLoginValidator from 'App/Validators/UserLoginValidator'

export default class AuthController {
  //vai ser usado para fazer o login, recebendo a REQUEST
  //sempre vai usar esses 3 parametros para fazer login
  public async login({ request, response, auth }: HttpContextContract) {
    //vai validar se o dado que veio da REQUEST está correto
    //e vai pegar os dados que vierem dele por DESTRUCTURING
    const { email, password } = await request.validate(UserLoginValidator)
    //vai fazer o login do USER e vai gerar um TOKEN que expira
    //em 2 horas
    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '2hours',
    })

    //vai retornar 200 com o USER e o TOKEN
    return response.ok({ user: auth.user, token })
  }

  public async logout({ response, auth }: HttpContextContract) {
    auth.logout()
    return response.ok('sucess')
  }
}
