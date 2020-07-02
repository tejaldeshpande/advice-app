import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/views/Home'
import Advice from '@/components/views/Advice'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/advice',
    name: 'Advice',
    component: Advice
  },
]

const router = new VueRouter({
  routes
})

export default router
