import { reqLogin, reqToken } from '@/api'

export default {
  state: {
    myPhone: '',
    showResume: false,
    token: '',
    userInfo: [],
  },
  mutations: {
    RECEIVE_USERINFO(state, value) {
      state.userInfo = value
    },
    RECEIVE_MYPHONE(state, userInfo) {
      state.myPhone = userInfo
    },
    RECEIVE_SHOWRESUME(state, show) {
      console.log(show)
      state.showResume = show
    },
    RECEIVE_TOKEN(state, value) {
      console.log(value)
      state.token = value
    },
    RECEIVE_DELUSERINFO(state, value) {
      state.myPhone = value
    },
  },
  actions: {
    async getUserInfo({ commit }, { phone, password }) {
      const result = await reqLogin(phone, password)
      console.log(result)
      if (result.code === 20000) {
        commit('RECEIVE_MYPHONE', result.data.phone)
        commit('RECEIVE_TOKEN', result.data.token)
        if (result.data.userInfo) {
          commit('RECEIVE_SHOWRESUME', true)
        } else {
          commit('RECEIVE_SHOWRESUME', false)
        }
      }
    },
    async mianLogin({ commit }) {
      const result = await reqToken()
      console.log(result)
      if (result.code === 20000) {
        commit('RECEIVE_MYPHONE', result.data.phone)
        commit('RECEIVE_USERINFO', result.data.userInfo)
        if (result.data.userInfo) {
          commit('RECEIVE_SHOWRESUME', true)
        } else {
          commit('RECEIVE_SHOWRESUME', false)
        }
      }
    },
    deleteUserInfo({ commit }) {
      commit('RECEIVE_DELUSERINFO', '')
    },
  },
  getters: {
    getUserName: (state) => {
      return '用户' + state.myPhone.slice(7, 11)
    },
  },
}
