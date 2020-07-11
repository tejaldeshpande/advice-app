import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/views/Home'
import Advice from '@/components/views/Advice'
import Results from '@/components/views/Results'

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
  {
    path: '/results',
    name: 'Results',
    component: Results
  },
]

const router = new VueRouter({
  routes
})

export default router
