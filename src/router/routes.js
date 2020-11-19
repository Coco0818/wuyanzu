// 引入需要的路由组件

// 引入主页
import Home from '@/pages/Home'
// 引入注册组件
import Register from '@/pages/Register'
// 引入登录组件
import Login from '@/pages/Login'
import Search from '@/pages/Search'

import Company from '@/pages/Company'

<<<<<<< HEAD
=======
import Detail from '@/pages/Detail'

>>>>>>> master
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
<<<<<<< HEAD
    path: "/company",
    components: Company
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/",
    redirect: "/",
=======
    path: '/register',
    component: Register,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/company',
    component: Company,
  },
  {
    path: '/detail/:id',
    component: Detail,
  },
  {
    path: '/',
    redirect: '/',
>>>>>>> master
  },
]
