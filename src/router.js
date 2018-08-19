import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Agenda from '@/views/Agenda.vue'
import Planning from '@/views/Planning.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: Agenda
    }, {
      path: '/planning',
      name: 'planning',
      component: Planning 
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
