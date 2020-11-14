import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 组件
import Header from '@/components/Header'

Vue.config.productionTip = false


// 全局的公共组件
Vue.component('Header', Header)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
