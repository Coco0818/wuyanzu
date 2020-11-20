// 引入需要的路由组件

// 引入主页
// import Home from '@/pages/Home'
const Home = () => import('@/pages/Home')
// 引入注册组件
// import Register from '@/pages/Register'
const Register = () => import('@/pages/Register')
// 引入登录组件
// import Login from '@/pages/Login'
const Login = () => import('@/pages/Login')
// import Company from '@/pages/Company'
const Company = () => import('@/pages/Company')
// 引入职位详情页
// import Detail from '@/pages/Detail'
const Detail = () => import('@/pages/Detail')
// 引入搜索页面
// import Search from '@/pages/Search'
const Search = () => import('@/pages/Search')
// 引入简历模板一
// import MyOffer from '@/pages/MyOffer'
const MyOffer = () => import('@/pages/MyOffer')
// 引入简历模板二
// import Education from '@/pages/Education'
const Education = () => import('@/pages/Education')
// 简历页面
// import MyResume from '@/pages/MyResume'('
const MyResume = () => import('@/pages/MyResume')
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
    path: '/login',
    redirect: '/login',
  },
]
