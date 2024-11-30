import { BaseModelDto } from '@adocasts.com/dto/base'
import User from '#models/user'
import ExpenseDto from '#dtos/expense'
import WalletDto from '#dtos/wallet'
import EmailHistoryDto from '#dtos/email_history'
import PasswordResetTokenDto from '#dtos/password_reset_token'

export default class UserDto extends BaseModelDto {
  declare id: number
  declare username: string
  declare email: string
  declare createdAt: string
  declare updatedAt: string | null
  declare expenses: ExpenseDto[]
  declare wallets: WalletDto[]
  declare emailHistory: EmailHistoryDto[]
  declare passwordResetTokens: PasswordResetTokenDto[]

  constructor(user?: User) {
    super()

    if (!user) return
    this.id = user.id
    this.username = user.username
    this.email = user.email
    this.createdAt = user.createdAt.toISO()!
    this.updatedAt = user.updatedAt?.toISO()!
    this.expenses = ExpenseDto.fromArray(user.expenses)
    this.wallets = WalletDto.fromArray(user.wallets)
    this.emailHistory = EmailHistoryDto.fromArray(user.emailHistory)
    this.passwordResetTokens = PasswordResetTokenDto.fromArray(user.passwordResetTokens)
  }
}
