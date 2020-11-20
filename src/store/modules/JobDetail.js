import { reqDetail } from "@/api";
import { reqPositions } from "@/api";
import { reqCateGorys } from "@/api";
import { reqCompanys } from "@/api";
export default {
  state: {
    detail: [],
    positions:[],
    cateGorys:[],
    companys:[],
  },
  mutations: {
    RECEIVE_DETAIL(state, detail) {
      state.detail = detail;
    },
    RECEIVE_POSITIONS(state, positions) {
      state.positions= positions;
    },
    RECEIVE_CATEGORYS(state, cateGorys) {
      state.cateGorys = cateGorys;
    },
    RECEIVE_COMPANYS(state,companys){
      state.companys=companys;
    },
  },
  actions: {
    // getPositions(){
    //   console.log('炒鸡帅')
    // }
    async getDetail({ commit },_id) {
      const result = await reqDetail(_id);
      console.log(result);
      if (result.code === 20000) {
        commit("RECEIVE_DETAIL", result.data);
      }
    },
    async getPositions({ commit }) {
      const result = await reqPositions();
      console.log(result);
      if (result.code === 20000) {
        commit("RECEIVE_POSITIONS", result.data);
      }
    },
    async getCateGorys({ commit }) {
      const result = await reqCateGorys();
      console.log(result);
      if (result.code === 20000) {
        commit("RECEIVE_CATEGORYS", result.data);
      }
    },
    async getCompanys({commit}){
      const result=await reqCompanys();
      console.log(result);
      if(result.code=20000){
        commit("RECEIVE_COMPANYS",resutl.data);
      }
    },
  },
  getters: {},
};
