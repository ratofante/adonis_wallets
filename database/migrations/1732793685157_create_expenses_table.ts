import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'expenses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('wallet_id')
        .unsigned()
        .notNullable()
        .references('wallets.id')
        .onDelete('CASCADE')
      table.integer('user_id').unsigned().notNullable().references('users.id')
      table
        .integer('category_id')
        .unsigned()
        .notNullable()
        .references('categories.id')
        .onDelete('CASCADE')
      table.decimal('amount', 10, 2).notNullable()
      table.string('name', 50).notNullable()
      table.string('description', 191)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
