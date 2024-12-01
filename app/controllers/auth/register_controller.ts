import WebRegister from '#actions/auth/http/web_register'
import { registerValidator } from '#validators/auth'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import emitter from '@adonisjs/core/services/emitter'

export default class RegisterController {
  async show({ inertia, session }: HttpContext) {
    return inertia.render('auth/register', {
      messages: session.flashMessages.all(),
    })
  }

  @inject()
  async store({ request, response, session }: HttpContext, webRegister: WebRegister) {
    const data = await request.validateUsing(registerValidator)
    const user = await webRegister.handle({ data })
    emitter.emit('user:registered', user)
    session.flash('success', 'You have been registered successfully.')
    return response.redirect().toPath('/dashboard')
  }
}
