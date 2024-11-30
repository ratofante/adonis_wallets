import { BaseModelDto } from '@adocasts.com/dto/base'
import Expense from '#models/expense'
import UserDto from '#dtos/user'
import WalletDto from '#dtos/wallet'
import CategoryDto from '#dtos/category'

export default class ExpenseDto extends BaseModelDto {
  declare id: number
  declare walletId: number
  declare userId: number
  declare categoryId: number
  declare amount: number
  declare name: string
  declare description: string
  declare createdAt: string
  declare updatedAt: string
  declare user: UserDto | null
  declare wallet: WalletDto | null
  declare category: CategoryDto | null

  constructor(expense?: Expense) {
    super()

    if (!expense) return
    this.id = expense.id
    this.walletId = expense.walletId
    this.userId = expense.userId
    this.categoryId = expense.categoryId
    this.amount = expense.amount
    this.name = expense.name
    this.description = expense.description
    this.createdAt = expense.createdAt.toISO()!
    this.updatedAt = expense.updatedAt.toISO()!
    this.user = expense.user && new UserDto(expense.user)
    this.wallet = expense.wallet && new WalletDto(expense.wallet)
    this.category = expense.category && new CategoryDto(expense.category)
  }
}