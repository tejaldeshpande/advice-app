import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import VueAgile from 'vue-agile'

Vue.use(VueAgile)


Vue.config.productionTip = false

//Global Components

//Vue.component('c', () => import('@/components/ui/container'));
Vue.component('container', () => import('@/components/ui/container'));



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
