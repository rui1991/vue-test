export default {
  switchPrice (state, getters, rootState) {
    return state.price + ' ' + rootState.unit
  }
}
