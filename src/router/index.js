import Vue from 'vue'
import VueRouter from 'vue-router'

import AddEvent from '../views/AddEvent.vue'
import DisplayEvent from '../views/DisplayEvent.vue'
import EditEvent from '../views/EditEvent.vue'
import Events from '../views/Events.vue'
import AddParticipant from '../views/AddParticipant.vue'
import EditParticipant from '../views/EditParticipant.vue'
import Login from '../views/auth/Login.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/event/add',
    name: 'AddEvent',
    component:AddEvent,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/event/edit/:id',
    name: 'EditEvent',
    component: EditEvent,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/event/:id/details',
    name: 'DisplayEvent',
    component: DisplayEvent,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/event/:id/add/participant',
    name: 'AddParticipant',
    component: AddParticipant,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/event/participant/:participantid/edit',
    name: 'EditParticipant',
    component: EditParticipant,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.name === 'Login' )) {
//     if (store.getters.isUserLoggedIn) {
//       next('/events')

//       return
//     }
//   }
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isUserLoggedIn) {
//       next()

//       return
//     }
    
//     next('/')
//   } else {
//     next()
//   }
// })

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isUserLoggedIn) {
      next()

      return
    }
    
    next('/')
  } else {
    // if (store.getters.isUserLoggedIn && to.name === 'Login'){
    //   next('/events')

    //   return
    // }
    next()
  }
})


export default router
