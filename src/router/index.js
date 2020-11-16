// 引入登录和注册
import Login from '../pages/Login'
import Register from '../pages/Register'

export default ({
  mode: 'history',
  routes =[
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

  ]
})