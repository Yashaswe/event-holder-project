import Vue from 'vue'
import VueRouter from 'vue-router'

import AddEvent from '../views/AddEvent.vue'
import Events from '../views/Events.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Events',
    component: Events
  },
  {
    path: '/event/add',
    name: 'AddEvent',
    component:AddEvent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
