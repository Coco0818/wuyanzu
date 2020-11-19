import { reqLogin } from '@/api'

export default {
  state: {
    myPhone: '',
  },
  mutations: {
    RECEIVE_USERINFO(state, userInfo) {
      state.myPhone = userInfo
    },
  },
  actions: {
    async getUserInfo({ commit }, { phone, password }) {
      const result = await reqLogin(phone, password)
      // console.log(result.data)
      if (result.code === 20000) {
        commit('RECEIVE_USERINFO', result.data.phone)
      }
    },
  },
  getters: {
    getUserName: (state) => {
      return '用户' + state.myPhone.slice(7, 11)
    },
  },
}
