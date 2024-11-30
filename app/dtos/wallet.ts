import { BaseModelDto } from '@adocasts.com/dto/base'
import Wallet from '#models/wallet'
import ExpenseDto from '#dtos/expense'
import UserDto from '#dtos/user'

export default class WalletDto extends BaseModelDto {
  declare id: number
  declare createdAt: string
  declare updatedAt: string
  declare expenses: ExpenseDto[]
  declare users: UserDto[]

  constructor(wallet?: Wallet) {
    super()

    if (!wallet) return
    this.id = wallet.id
    this.createdAt = wallet.createdAt.toISO()!
    this.updatedAt = wallet.updatedAt.toISO()!
    this.expenses = ExpenseDto.fromArray(wallet.expenses)
    this.users = UserDto.fromArray(wallet.users)
  }
}