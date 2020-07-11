import Vue from 'vue'
import Vuex from 'vuex'
import VueAgile from 'vue-agile'

Vue.use(VueAgile)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResults: [],
    adviceArray: [],
    searchTerm: undefined
  },
  mutations: {
    setResults(state, results) {
      state.searchResults = results;
    },
    setAdvice(state, results) {
      state.adviceArray = results;
    },
    setSearchTerm(state, searchTerm){
      state.searchTerm = searchTerm;
    }
  },
  actions: {
  },
  modules: {
  }
})
