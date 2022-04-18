import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserLoginValidator {
  constructor(protected ctx: HttpContextContract) {}

  //validator para USER_LOGIN
  public schema = schema.create({
    email: schema.string({}, [rules.email()]),
    password: schema.string({}, [rules.minLength(6)]),
  })

  public messages = {}
}
