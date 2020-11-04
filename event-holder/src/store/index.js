import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({
  actions: {
    addEvent(context,event) {
      context.commit('addEvent', event)
    },
    editEvent(context,event) {
      context.commit('editEvent', event)
    },
    addParticipant(context,payload) {
      context.commit('addParticipant', payload)
    },
    deleteEvent(context,event) {
      context.commit('deleteEvent', event)
    }
  },

  getters: {
    getEvents(state) {
      return state.events
    },
  },

  mutations: {
    addEvent(state, event) {
      const id=state.events.length + 1
      let _event=Object.assign(event,{id :id})
      state.events.push(_event)
    },

    addParticipant(state, payload) {
      state.events.forEach(function(item, index) {
        if(item.id==payload.event.id) {
          const participantId=state.events[index].participants.length + 1
          let _participants=Object.assign(payload.participant,{participantid:participantId})
          state.events[index].participants.push(_participants)
        }
      })
    },

    deleteEvent(state, event) {
      state.events.forEach(function(item, index) {
        if(item.id==event.id) {
          state.events.splice(index, 1)
        }
      })
    },

    editEvent(state, event) {
      state.events.forEach(function(item, index) {
        if(item.id==event.id) {
          state.events[index]=event
        }
      })
    }
  },

  state: {
    events:[]
  }
})

export default store
