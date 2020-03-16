import Vue from 'vue'
import Vuex from 'vuex'
import { getRoles } from '../api/role'
import { asyncRoutes, constantRoutes } from '../router'
Vue.use(Vuex)

const hasPermission = (roles, route) => {
  console.log(roles)
  console.log(route)
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

const filterAsyncRoutes = (routes, roles) => {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

export default new Vuex.Store({
  state: {
    roles: [],
    routes: []
  },

  getters: {
    roles: state => state.roles,
    routes: state => state.routes
  },

  mutations: {
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },

    SET_ROUTES: (state, routes) => {
      state.routes = constantRoutes.concat(routes)
      console.log(constantRoutes.concat(routes))
    }
  },
  actions: {
    getRoles ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getRoles().then(response => {
          console.log(response)
          const { data } = response
          const { roles } = data
          commit('SET_ROLES', roles)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    generateRoutes ({ commit }, roles) {
      console.log(roles)
      return new Promise(resolve => {
        let accessedRoutes
        if (roles.includes('admin')) {
          accessedRoutes = asyncRoutes || []
        } else {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        }
        console.log(accessedRoutes)
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  },
  modules: {
  }
})
