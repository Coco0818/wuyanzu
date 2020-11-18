// 二次封装axios拦截器
// 引入axios
import axios from 'axios'
// 引入Nprogress可以在拦截器请求或响应时有进度条的效果
import Nprogress from 'nprogress'
// 引入该插件的样式文件
import 'nprogress/nprogress.css'
// 设置请求的时候被拦截器拦截下来添加上api前缀 和 请求超时时间
const ajax = axios.create({
<<<<<<< HEAD
  baseURL: '/',  // 根路径
  timeOut: 20000  // 超时时间
})
=======
  baseURL: "/api", // 根路径
  timeOut: 20000, // 超时时间
});
>>>>>>> dff1b239c49eefbd540c6e2fd68c034a4aa47bfc
// 请求拦截器
ajax.interceptors.request.use(config => {
  Nprogress.start() // 显示进度条
  return config // 把成功信息返回出去
})
// 响应拦截器
ajax.interceptors.response.use(response => {
  Nprogress.done() // 隐藏进度条
  // 直接返回响应数据
  return response.data
}, error => {
    Nprogress.done()  // 隐藏进度条
    alert('错误信息为'+error.message)
    return Promise.reject(()=>{}) // 把错误的信息返回，外部可以做处理
})

// 导出
export default ajax

