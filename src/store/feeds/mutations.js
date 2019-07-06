import * as types from './mutation-type'

export default {
  [types.ADD_COUNT] (state) {
    state.count++
  },
  [types.MINUS_COUNT] (state) {
    state.count--
  },
  [types.SET_PRICE] (state, value) {
    state.price = value
  }
}
