import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
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
})
