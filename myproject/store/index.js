import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    sum: 0
  },
  actions: {
    incrementOdd(context, value) {
      console.log(context, value);
      
      if(context.state.sum % 2 === 1) {
        context.commit('increment', value);
      }
    },
    incrementWait(context, value) {
      setTimeout(() => {
        context.commit('increment', value);
      }, 500);
    }
  },
  mutations: {
    increment (state, value) {
      state.sum = state.sum + value;
    },
    decrement (state, value) {
      state.sum = state.sum - value;
    }
  }
})