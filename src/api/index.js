// 封装api

import ajax from "./ajax";

// 所有信息
export const reqPositions = () => ajax.get("/positions");
// 具体某个岗位信息
export const reqDetail = (id) => ajax.get(`/detail/${id}`);
// 三级分类
export const reqCateGorys = () => ajax.get("/categorys");

//  互联网热门公司
export const reqCompanys = () => ajax.get("/companys");

//  过滤栏
export const reqFilters = () => ajax.get("/filters");
