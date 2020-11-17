// 引入需要的路由组件

// 引入主页
import Home from '@/pages/Home'
// 引入注册组件
import Register from '@/pages/Register'
// 引入登录组件
import Login from '@/pages/Login'
// 引入详情页组件
import Detail from '@/pages/Detail'

// 暴露出去
export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/detail',
    component: Detail,
  },
  {
    path: '/',
    redirect: '/',
  },
]
