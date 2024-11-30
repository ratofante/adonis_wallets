import WebRegister from '#actions/auth/http/web_register'
import { registerValidator } from '#validators/auth'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  async show({ inertia, session }: HttpContext) {
    return inertia.render('auth/register', {
      messages: session.flashMessages.all(),
    })
  }

  @inject()
  async store({ request, response, session }: HttpContext, webRegister: WebRegister) {
    const data = await request.validateUsing(registerValidator)
    await webRegister.handle({ data })
    session.flash('success', 'You have been registered successfully.')
    return response.redirect().toPath('/dashboard')
  }
}
