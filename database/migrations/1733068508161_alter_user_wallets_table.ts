import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_wallets'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.unique(['user_id', 'wallet_id'])
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {})
  }
}
