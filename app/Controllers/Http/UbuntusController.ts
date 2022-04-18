import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import model from 'App/Models/Ubuntu'
import UbuntuValidator from 'App/Validators/UbuntuValidator'

export default class UbuntusController {
  public async post({ request, response }: HttpContextContract) {
    const ubuntuPayload = await request.validate(UbuntuValidator)

    const ubuntu = await model.create(ubuntuPayload)

    return response.created({ ubuntu: ubuntu, sucess: 'true' })
  }
}
