import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import { Exception } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RoleModel from 'App/Models/Role'
import UserRoleModel from 'App/Models/UserRole'

export default class RolesAuth {
  public static roles: string[] = ['ADMIN', 'TESTE']

  public validateRole(role: String) {
    switch (role) {
      case 'ADMIN':
        return true
      case 'TESTE':
        return true
      default:
        return false
    }
  }

  public async handle({ auth }: HttpContextContract, next: () => Promise<void>, guards?: string[]) {
    if (!auth.isAuthenticated) {
      throw new AuthenticationException('Unauthorized access', 'E_UNAUTHORIZED_ACCESS')
    }
    const role = this.validateRole(guards![0]) === true ? guards![0] : null

    const existRole = await RoleModel.findBy('name', role)
    const userRole = await UserRoleModel.findBy('user_id', auth.user?.id)

    if (existRole === null || userRole === null) {
      throw new Exception('Unauthorized access', 404)
    }

    if (existRole.id !== userRole.role_id) {
      throw new Exception('Unauthorized access', 403)
    }
    await next()
  }
}
