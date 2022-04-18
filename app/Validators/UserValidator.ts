import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  //validator para USER
  public schema = schema.create({
    email: schema.string({}, [rules.email()]),
    password: schema.string({}, [rules.minLength(6)]),
    name: schema.string({}, [rules.nullable()]),
  })

  public messages = {}
}
