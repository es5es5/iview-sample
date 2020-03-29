import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    name: 'DBList',
    component: () => import('@/templates/db/views/DBList')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
