export default {
  namespaced: true,
  state: {
    name: 'moduleA',
    crewTable: []
  },
  mutations: {
    ADD_CREW (state, item) {
      state.crewTable.push(item)
    },
    DEL_CREW (state, index) {
      state.crewTable.splice(index, 1)
    }
  },
  actions: {
    addCrew ({ commit }, item) {
      commit('ADD_CREW', item)
    },
    delCrew ({ commit }, index) {
      commit('DEL_CREW', index)
    }
  },
  getters: {
    tableData (state) {
      let personData = state.crewTable.map(item => {
        if (item.age) {
          return {
            message: '姓名：' + item.name + '    年龄：' + item.age,
            date: item.date
          }
        } else {
          return {
            message: '姓名：' + item.name,
            date: item.date
          }
        }
      })
      return personData
    }
  }
}
