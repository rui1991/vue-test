import * as types from './mutation-type'
export default {
  addCount ({ commit }) {
    commit(types.ADD_COUNT)
  },
  minusCount ({ commit }) {
    commit(types.MINUS_COUNT)
  },
  setPrice ({ commit }, value) {
    commit(types.SET_PRICE, value)
  }
}
