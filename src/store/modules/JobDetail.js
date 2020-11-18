import { reqPositions } from "@/api";
export default {
  state: {
    Positions: [],
  },
  mutations: {
    RECEIVE_POSITIONS(state, Positions) {
      state.Positions = Positions;
    },
  },
  actions: {
    async getPositions({ commit }) {
      const result = await reqPositions();
      console.log(result);
      if (result.code === 20000) {
        commit("RECEIVE_POSITIONS", result.data);
      }
    },
  },
  getters: {},
};
