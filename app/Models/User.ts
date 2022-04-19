import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Role from './Role'

export default class User extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column({ isPrimary: true })
  public email: string

  @column()
  public name: string

  //quando tem essa propriedade o banco nn vai trazer esse dado para
  //o frontend  via JSON
  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  //muitos para muitos
  @manyToMany(() => Role)
  public roles: ManyToMany<typeof Role>

  //ante de salvar sempre vai rodar esse codigo
  //que serve para CRYPTOGRAFAR a senha do USER
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
