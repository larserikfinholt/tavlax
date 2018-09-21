import Vue from 'vue'
import Router from 'vue-router'
import Agenda from '@/views/Agenda.vue'
import Firstrun from '@/views/Firstrun.vue'
import Planning from '@/views/Planning.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'agenda',
      component: Agenda
    },
     {
      path: '/planning',
      name: 'planning',
      component: Planning 
    },
    {
      path: '/firstrun',
      name: 'firstrun',
      component: Firstrun 
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
