import Vue from 'vue'
import Vuex from 'vuex'
import fb from '../firebase-config'

const DB = fb.firestore

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    websitePics: [],
    staffPics: [],
    admin: false,
    path: "Treehouse1"
  },
  mutations: {
    setAdmin(state, password) {
      if (password == state.path) {
        state.admin = true
      }
    }
  },
  actions: {
    adminLogin({ commit }, password) {
      commit("setAdmin", password)
    },

    adminTimer() {
      debugger
      let count = 3000
      for (let i = 0; i < count; i++) {
        this.state.admin = true
      } this.state.admin = false
    }
  },
  modules: {}
})
