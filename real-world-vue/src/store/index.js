import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 111, name: 'David Shir' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
    ],
    events: [
      { id: 1, title: 'SHIITTTT' },
      { id: 2, title: 'SHIIT34343434TTT' },
      { id: 3, title: 'SHII224TTTT' },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: (state) => {
      return state.categories.length
    },
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id)
    },
  },
})
