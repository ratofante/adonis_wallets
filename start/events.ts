import emitter from '@adonisjs/core/services/emitter'

// Listener
const CreateGeneralWallet = () => import('#listeners/create_general_wallet')

emitter.on('user:registered', [CreateGeneralWallet, 'handle'])
