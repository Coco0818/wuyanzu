import ajax from "./ajax.js";

// 所用公司信息
export const reqPositions = () => ajax.get("/positions");
