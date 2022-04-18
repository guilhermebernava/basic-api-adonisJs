import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

//models que utilizamos para comunicar com o banco
//de dados para fazer QUERY e inserir dados nele
export default class Ubuntu extends BaseModel {
  //propriedades que existem no banco
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public age: number

  @column()
  public dev: boolean

  @column()
  public height: number

  @column()
  public weight: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
