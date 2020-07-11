import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import '@/assets/fonts/icomoon/style.css'
import VueAgile from 'vue-agile'


Vue.use(VueAgile)


Vue.config.productionTip = false

//Global Components

Vue.component('container', () => import('@/components/ui/container'));

Vue.component('options', () => import('@/components/ui/options'));

Vue.component('search-bar', () => import('@/components/ui/search-bar'));

Vue.component('category', () => import('@/components/ui/category'));



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
