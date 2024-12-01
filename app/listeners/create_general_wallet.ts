import User from '#models/user'
import Wallet from '#models/wallet'
import Role from '#models/role'

export default class CreateGeneralWallet {
  async handle(user: User) {
    const wallet = await Wallet.create({
      name: 'General',
      description: 'General wallet',
    })
    const ownerRole = await Role.findByOrFail('name', 'owner')
    wallet.related('users').attach({
      [user.id]: {
        role_id: ownerRole.id,
      },
    })
  }
}
