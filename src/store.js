import Vue from 'vue'
import Vuex from 'vuex'
// import agenda from '@/state/agenda';

Vue.use(Vuex)

const agenda = {
  state: {
      tasks: []

  },
  mutations: {
      addTask(state, task) {
          state.tasks.push(task);
      }
  },
  actions: {
      addDummyData(context) {
          context.commit('addTask', { name: 'task1' });

      }
  },
  // getters: {
  //     getToDay(context) {
  //         console.log('getting today');
  //         return context.state.tasks;
  //     }
  // }
}



export default new Vuex.Store({
  state: {
  },
  modules:{
    agenda:agenda
  },
  mutations: {
  },
  actions: {
  }
})
