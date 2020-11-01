import Vue from 'vue'
import VueRouter from 'vue-router'

import AddEvent from '../views/AddEvent.vue'
import DisplayEvent from '../views/DisplayEvent.vue'
import EditEvent from '../views/EditEvent.vue'
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
  },
  {
    path: '/event/edit/:id',
    name: 'EditEvent',
    component: EditEvent
  },
  {
    path: '/event/:id/info',
    name: 'DisplayEvent',
    component: DisplayEvent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
