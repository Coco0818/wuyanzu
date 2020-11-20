import ajax from "./ajax.js";

// 详情页信息
export const reqDetail = (id) => ajax.get(`/Detail/${id}`);


export const reqPositions =()=> ajax.get('/positions');
export const reqCateGorys = () => ajax.get('/categorys')
export const reqCompanys= () =>ajax.get('/companys')
// export const reqFilters =()=> ajax.get('/filters')
// export const reqCategorys =()=>ajax.get('/categorys')
