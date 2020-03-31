import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../layout'

Vue.use(VueRouter)

export const constantRoutes = [

  {
    path: '/login',
    component: () => import('../views/login'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: { title: 'Home' },
    children: [
      {
        path: 'home',
        component: () => import('../views/process/menu1/index'), // Parent router-view
        name: 'Home',
        meta: { title: 'Home' }
      }
    ]
  },

  {
    path: '/404',
    component: () => import('../views/404'),
    hidden: true
  },

  {
    path: '/process',
    component: Layout,
    redirect: '/process/menu1',
    meta: { title: 'Process' },
    children: [
      {
        path: 'menu1',
        component: () => import('../views/process/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('../views/process/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('../views/process/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('../views/process/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('../views/process/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('../views/process/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('../views/process/menu2/index'),
        meta: { title: 'Menu2' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/menu1',
    name: 'Permission',
    meta: {
      title: 'Permission',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'menu1',
        component: () => import('../views/permission/menu1'),
        name: 'PagePermission',
        meta: {
          title: 'Menu1',
          roles: ['admin']
        }
      },
      {
        path: 'menu2',
        component: () => import('../views/permission/menu2'),
        name: 'Menu2',
        meta: {
          title: 'Menu2'
        }
      },
      {
        path: 'menu3',
        component: () => import('../views/permission/menu3'),
        name: 'Menu3',
        meta: {
          title: 'Menu3',
          roles: ['admin']
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router
