import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'

// Types
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'

// Models
import User from '#models/user'
import Expense from '#models/expense'

export default class Wallet extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Expense)
  declare expenses: HasMany<typeof Expense>

  @manyToMany(() => User, {
    pivotTable: 'user_wallets',
    pivotColumns: ['role_id'],
  })
  declare users: ManyToMany<typeof User>
}
