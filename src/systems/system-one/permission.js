import router from './router'
import store from './store'
import { getToken } from './utils/auth'

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken('Token')
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasRoles = store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        const { roles } = await store.dispatch('getRoles')
        console.log(roles)
        const accessRoutes = await store.dispatch('generateRoutes', roles)
        router.addRoutes(accessRoutes)
        console.log(accessRoutes)
        next({ ...to, replace: true })
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
