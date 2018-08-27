import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    userId: ''
  },
  mutations: {
    setUserId (state, userId) {
      console.log(state);
      console.log(userId)
      state.userId = userId
    }
  }
})

export default store
