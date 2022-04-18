import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UbuntuValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [rules.required()]),
    age: schema.number([rules.required()]),
    dev: schema.boolean([rules.required()]),
    height: schema.number([rules.nullable()]),
    weight: schema.number([rules.nullable()]),
  })

  public messages = {}
}
