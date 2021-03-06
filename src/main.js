import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 公共组件
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pagination from '@/components/Pagination'

import BackTop from '@/components/BackTop'

// 使用element-ui
Vue.use(ElementUI)

// 注册公共组件
Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Pagination', Pagination) // 分页
Vue.component('BackTop', BackTop)

Vue.config.productionTip = false

// 全局的公共组件
Vue.component('Header', Header)

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
