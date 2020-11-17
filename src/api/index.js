// 封装api

import ajax from './ajax'

// 所有信息
export const reqPositions = () => ajax.get('/positions')

// 三级分类
export const reqCateGorys = () => ajax.get('/categorys')

//  互联网热门公司
export const reqCompanys = () => ajax.get('/companys')

//  过滤栏
export const reqFilters = () => ajax.get('/filters')

// 注册
export const reqRegister = (phone,password) => ajax.post(`/register`,{phone,password})

// 登录
export const reqLogin = (phone,password) => ajax.post(`/login`,{phone,password})
