import { reqCompanys } from "@/api";
export default {
  state: {
    company: [],
  },
  mutations: {
    RECEIVE_COMPANY(state, company) {
      state.company = company;
    },
  },
  actions: {
    async getCompanys({ commit }) {
      const result = await reqCompanys();
      if (result.data.code === 20000) {
        commit("RECEIVE_COMPANY", result.data.data);
      }
    },
  },
  getters: {},
};
