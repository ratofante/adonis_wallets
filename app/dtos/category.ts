import { BaseModelDto } from '@adocasts.com/dto/base'
import Category from '#models/category'
import ExpenseDto from '#dtos/expense'

export default class CategoryDto extends BaseModelDto {
  declare id: number
  declare name: string
  declare createdAt: string
  declare updatedAt: string
  declare expenses: ExpenseDto[]

  constructor(category?: Category) {
    super()

    if (!category) return
    this.id = category.id
    this.name = category.name
    this.createdAt = category.createdAt.toISO()!
    this.updatedAt = category.updatedAt.toISO()!
    this.expenses = ExpenseDto.fromArray(category.expenses)
  }
}