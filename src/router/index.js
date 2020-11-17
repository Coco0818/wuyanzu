// 引入Vue
import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
// 引入路由集合
import routes from './routes'

// 使用路由
Vue.use(VueRouter)

// 实例化路由并暴露出去
const router = new VueRouter({
  mode: 'history', // 去掉地址栏前面的#
  routes
})

export default router