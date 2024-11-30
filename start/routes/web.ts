import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const DashboardController = () => import('#controllers/dashboard_controller')
const WalletsController = () => import('#controllers/wallets_controller')
const ExpensesController = () => import('#controllers/expenses_controller')
/* prettier-ignore-start */
/* eslint-disable */

router
  .group(() => {
    router.get('/dashboard', [DashboardController, 'index']).as('dashboard.index')
    router.get('/wallets', [WalletsController, 'index']).as('wallets.index')
    router.resource('expenses', ExpensesController)
  })
  .use(middleware.auth())

/* prettier-ignore-end */
/* eslint-enable */
