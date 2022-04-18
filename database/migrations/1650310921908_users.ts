import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  //nome da tabela gerada no banco
  protected tableName = 'users'

  //serve para gerar essas coluna no banco de dados
  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      //chave primaria
      table.increments('id').primary()
      //pode ser nulo
      table.string('name', 180).nullable()
      //not pode ser nulo
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
