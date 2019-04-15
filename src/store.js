import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_AUTHENTICATED: 'SET_AUTHENTICATED',
  SET_USER: 'SET_USER'
}

const state = {
  isAurhenticated: false,
  user: {}
};

const getters = {
  isAurhenticated: state => state.isAurhenticated,
  user: state => state.user
};

const mutations = {
  [types.SET_AUTHENTICATED](state, isAurhenticated) {
    if (isAurhenticated) state.isAurhenticated = isAurhenticated;
    else state.isAurhenticated = false;
  },
  [types.SET_USER](state, user) {
    if (user) state.user = user;
    else state.user = {};
  }
};

const actions = {
  setAurhenticated: ({commit}, isAurhenticated) => {
    commit(types.SET_AUTHENTICATED, isAurhenticated);
  },
  setUser: ({commit}, user) => {
    commit(types.SET_USER, user);
  },
  // 清除登录状态
  clearCurrentState: ({commit}) => {
    commit(types.SET_AUTHENTICATED, false);
    commit(types.SET_USER, null);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
