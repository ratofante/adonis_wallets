import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'

// Types
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

// Models
import User from '#models/user'
import Wallet from '#models/wallet'
import Category from '#models/category'

export default class Expense extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare walletId: number

  @column()
  declare userId: number

  @column()
  declare categoryId: number

  @column()
  declare amount: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare date: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Wallet)
  declare wallet: BelongsTo<typeof Wallet>

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>
}
