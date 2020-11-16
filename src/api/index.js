// 封装api

import ajax from './ajax'

// 所有信息
export const reqCompany = () => ajax.get('/positions')

// 三级分类
export const reqCateGory = () => ajax.get('/categorys')
