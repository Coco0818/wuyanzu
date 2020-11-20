import { reqMyResume } from '@/api'

export default {
  state: {
    myResumeInfo: {},
    headPic: {},
  },
  mutations: {
    RECEIVE_MYRESUMEINFO(state, value) {
      state.myResumeInfo = value
    },
    RECEIVE_HEADPIC(state, value) {
      state.headPic = value
    },
  },
  actions: {
    async getMyResumeInfo({ commit }, { myPhone }) {
      console.log(myPhone)
      const result = await reqMyResume(myPhone)

      if (result.code === 20000) {
        commit('RECEIVE_MYRESUMEINFO', result.data[0])
        commit('RECEIVE_HEADPIC', result.data[1])
      }
    },
  },
  getters: {},
}
