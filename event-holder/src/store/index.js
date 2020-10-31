import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({
  actions: {
    addEvent(context,event){
      context.commit('addEvent', event)
    }
  },

  getters: {
    getEvents(state){
      return state.events
    }
  },

  mutations: {
    addEvent(state, event){
      const id=state.events.length+1
      let _event=Object.assign(event,{id :id})
      state.events.push(_event)
    }
  },
  
  state: {
    events:[]
  }  
})

export default store