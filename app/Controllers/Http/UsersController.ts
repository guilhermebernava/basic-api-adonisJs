import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserValidator from 'App/Validators/UserValidator'
import model from 'App/Models/User'

export default class UsersController {
  public async post({ request, response }: HttpContextContract) {
    const userPayload = await request.validate(UserValidator)

    const existThisEmail = await model.findBy('email', userPayload.email)

    if (existThisEmail !== null) return response.abort({ error: 'Already exist this user' })

    const user = await model.create(userPayload)

    return response.created({ user })
  }
}
