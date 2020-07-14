import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogined:sessionStorage.getItem('isLogined')?sessionStorage.getItem('isLogined'):false
  },
  mutations: {
    login_mutation(state){
        state.isLogined=true
    },
    logout_mutation(state){
      state.isLogined=false
      sessionStorage.clear();
    }
  },
  actions: {
  },
  modules: {
  }
})
