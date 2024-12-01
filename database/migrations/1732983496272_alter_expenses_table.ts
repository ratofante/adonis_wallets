import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'expenses'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('date')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {})
  }
}
