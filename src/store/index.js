import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import state from './state'
import mutations from './mutations';
import getters from './getters';


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})