import type { HttpContext } from '@adonisjs/core/http'

export default class WalletsController {
  async index({ inertia }: HttpContext) {
    return inertia.render('wallets')
  }
}
