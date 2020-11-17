// 二次封装axios
// 引入axios
import axios from "axios";
// 引入Nprogress插件,可以在发送请求或者作出响应的时候有进度条的效果
import Nprogress from 'nprogress'
// 引入该插件的样式文件
import 'nprogress/nprogress.css'

// 设置请求的时候的根路径及请求的超时时间
const ajax = axios.create({
  baseURL: "/api", // 根路径
  timeOut: 20000, // 超时时间
});
// 请求拦截器
ajax.interceptors.request.use((config)=>{
  Nprogress.start() // 显示进度条
  return config
})
// 响应拦截器
ajax.interceptors.response.use(
  (response) => {
    Nprogress.done() // 隐藏进度条
    // 直接返回响应数据
    return response.data;
  },
  (error) => {
    Nprogress.done() // 隐藏进度条
    alert("错误信息为:" + error.message);
    // return new Promise(()=>{}) // 外部不做错误的处理操作了
    return Promise.reject(error); // 把错误信息返回,外部可以做处理
  }
);
export default ajax;
