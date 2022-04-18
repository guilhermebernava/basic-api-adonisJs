import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ubuntus extends BaseSchema {
  protected tableName = 'ubuntus'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique()
      table.string('name').notNullable()
      table.integer('age').notNullable()
      table.boolean('dev').notNullable()
      table.double('height').nullable()
      table.double('weight').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
