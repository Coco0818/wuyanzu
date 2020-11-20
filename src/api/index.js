// 封装api

import ajax from './ajax'

// 所有信息
export const reqPositions = () => ajax.get('/positions')
// 具体某个岗位信息
export const reqDetail = (id) => ajax.get(`/detail/${id}`)
// 三级分类
export const reqCateGorys = () => ajax.get('/categorys')

//  互联网热门公司
export const reqCompanys = () => ajax.get('/companys')

//  过滤栏
export const reqFilters = () => ajax.get('/filters')

// 注册
export const reqRegister = (phone, password) =>
  ajax.post(`/register`, { phone, password })

// 密码登录
export const reqLogin = (phone, password) =>
  ajax.post(`/login`, { phone, password })

// 点击获取验证码
export const reqgetCode = (phone) => ajax.post(`/getCode`, { phone })

// 验证码登录
export const reqVerifyCodeLogin = (phone, verifyCode) =>
  ajax.post(`/verifyCode`, { phone, verifyCode })

// 传入简历
export const reqUploadUserInfo = (userInfo, phone) =>
  ajax.post(`/uploadUserInfo/${phone}`, userInfo)

// 简历信息
export const reqMyResume = (phone) => ajax.get(`/userInfo/${phone}`)

export const reqToken = () => ajax.get(`/token`)
