//　封装每个接口的api函数

// 引入axios
import ajax from './ajax'

//  const url = "http://182.92.128.115/api/product/getBaseCategoryList";
//  const result = await ajax.get(url);

// 现在我要使用 ajax.get()这个方法，所以需要将它封装成一个函数
// 获取详情页信息的api接口函数
// ()=>ajax.get(`地址路径`) 是一个回调函数
export const reqPositions = () => ajax.get('/positions')