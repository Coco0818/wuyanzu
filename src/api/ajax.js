import axios from 'axios'
const ajax = axios.create({
  baseURL: '/',
  timeout: 2000,
})

ajax.interceptors.request.use((config) => {
  return config
})

ajax.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    alert(Promise.reject(err.message))
  }
)

export default ajax
