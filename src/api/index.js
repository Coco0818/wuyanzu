// 封装每个接口的api函数
// 引入ajax 
import ajax from './ajax'
// 获取全部岗位信息API
export const reqGetAllStationMsg = () => ajax.get(`/positions`)