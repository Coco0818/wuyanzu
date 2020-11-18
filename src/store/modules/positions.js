import { reqPositions } from '@/api'

export default {
  state: {
    positions: [],
  },
  mutations: {
    RECEIVE_POSITIONS(state, positions) {
      state.positions = positions
    },
  },
  actions: {
    async getPositions({ commit }) {
      const result = await reqPositions()

      console.log(result)
      if (result.code === 20000) {
        commit('RECEIVE_POSITIONS', result.data)
      }
    },
  },
  getters: {},
}
