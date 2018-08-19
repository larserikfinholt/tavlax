import Vue from 'vue'
import Vuex from 'vuex'
import { agenda } from '@/state/agenda';
import { family } from '@/state/family';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    agenda,
    family
  },
  mutations: {
  },
  actions: {
  }
})
