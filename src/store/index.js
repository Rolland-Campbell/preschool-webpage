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
    password: "Treehouse1!"
  },
  mutations: {
    setAdmin(state, password) {
      if (password == state.password) { state.admin = true }
    }
  },
  actions: {
    adminLogin({ commit }, password) {
      commit("setAdmin", password)
    }
  },
  modules: {}
})
