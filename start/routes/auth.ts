import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const LoginController = () => import('#controllers/auth/login_controller')
const LogoutController = () => import('#controllers/auth/logout_controller')
const RegisterController = () => import('#controllers/auth/register_controller')

/* prettier-ignore-start */
/* eslint-disable */

router
  .group(() => {
    router.get('/register', [RegisterController, 'show']).as('register.show')
    router.post('/register', [RegisterController, 'store'])
    router.get('/login', [LoginController, 'show']).as('login.show')
    router.post('/login', [LoginController, 'store']).as('login.store')
  })
  .use(middleware.guest())

router.post('/logout', [LogoutController, 'handle']).as('logout').use(middleware.auth())
router.get('/', (ctx) => {
  if (ctx.auth.isAuthenticated) {
    ctx.response.redirect().toPath('/dashboard')
  }
  ctx.auth.isAuthenticated
    ? ctx.response.redirect().toPath('/dashboard')
    : ctx.response.redirect().toPath('/register')
})
