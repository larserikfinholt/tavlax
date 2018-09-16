import Vue from 'vue'
import Vuex from 'vuex'
import { agenda } from '@/state/agenda';
import { family } from '@/state/family';
import {calendar } from '@/state/calendar';
 Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    agenda,
    family,
    calendar
  },
  mutations: {
  },
  actions: {
  }
})
