// 引入需要的路由组件

// 引入主页
import Home from '@/pages/Home'
// 引入注册组件
import Register from '@/pages/Register'
// 引入登录组件
import Login from '@/pages/Login'

import Company from '@/pages/Company'

import Detail from '@/pages/Detail'
// 引入搜索页面
import Search from '@/pages/Search'
// 引入简历模板一
import MyOffer from '@/pages/MyOffer'
// 引入简历模板二
import Education from '@/pages/Education'
// 简历页面
import MyResume from '@/pages/MyResume'
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
    path: '/search',
    component: Search,
  },
  {
    path: '/company',
    component: Company,
  },
  {
    path: '/myoffer',
    component: MyOffer,
  },
  {
    path: '/education',
    component: Education,
  },
  {
    path: '/myresume',
    component: MyResume,
  },

  {
    path: '/',
    redirect: '/',
  },
]
