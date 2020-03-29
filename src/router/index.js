import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

// Routes
import DBList from '../templates/db/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/db',
    name: 'Home',
    component: Home
  },
  {
    path: '/db',
    name: 'DB',
    component: () => import('../components/MainLayout'),
    children: [
      ...DBList
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../components/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
