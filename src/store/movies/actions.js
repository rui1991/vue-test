export default {
  changeMes ({ commit }, value) {
    commit('CHANGE_MES', value)
  },
  switcherState ({ commit }) {
    commit('SWITCHER_STATE')
  }
}
