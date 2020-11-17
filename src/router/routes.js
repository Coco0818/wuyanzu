// 引入需要的路由组件
import Login from '../pages/Login'
import Register from '../pages/Register'
import Detail from '../pages/Detail'


// 暴露出去
export default [
  {
    // 登录 
    path: '/login',
    component: Login
  },
  {
    // 注册 
    path: '/register',
    component: Register
  },
  {
    // 详情
    path: '/detail',
    component: Detail
  },
]