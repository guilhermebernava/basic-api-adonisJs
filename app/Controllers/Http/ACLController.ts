import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RoleValidator from 'App/Validators/RoleValidator'
import RoleModel from 'App/Models/Role'
import UserModel from 'App/Models/User'
import UserRoleModel from 'App/Models/UserRole'

export default class ACLController {
  public async postRole({ request, response }: HttpContextContract) {
    const rolePayload = await request.validate(RoleValidator)
    const role = await RoleModel.create(rolePayload)

    response.created(role)
  }

  public async postUserRole({ request, response, auth }: HttpContextContract) {
    const roleName = request.only(['name'])
    const role = await RoleModel.findByOrFail('name', roleName.name)
    const user = await UserModel.findByOrFail('email', auth.user!.email)

    const userRole = await UserRoleModel.create({ user_id: user.id, role_id: role.id })

    return response.created(userRole)
  }
}
