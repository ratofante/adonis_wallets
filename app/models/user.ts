import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

// Types
import type { ManyToMany, HasMany } from '@adonisjs/lucid/types/relations'

// Models
import Wallet from '#models/wallet'
import Expense from '#models/wallet'
import EmailHistory from '#models/email_history'
import PasswordResetToken from '#models/password_reset_token'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasMany(() => Expense)
  declare expenses: HasMany<typeof Expense>

  @manyToMany(() => Wallet, {
    pivotTable: 'user_wallets',
    pivotColumns: ['role_id'],
  })
  declare wallets: ManyToMany<typeof Wallet>

  @hasMany(() => EmailHistory)
  declare emailHistory: HasMany<typeof EmailHistory>

  @hasMany(() => PasswordResetToken)
  declare passwordResetTokens: HasMany<typeof PasswordResetToken>
}
