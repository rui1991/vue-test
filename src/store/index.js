import Vue from 'vue'
import Vuex from 'vuex'

import feeds from './feeds'
import movies from './movies'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

Vue.use(Vuex)

const state = {
  unit: '¥',
  count: 20,
  name: '张三'
}

const mutations = {

}

const actions = {

}

const getters = {

}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    feeds,
    movies,
    moduleA,
    moduleB
  }
})

export default store
