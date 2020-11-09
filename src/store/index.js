import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const events="events-storage"

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
    editParticipant(context,payload) {
      context.commit('editParticipant', payload)
    },
    deleteEvent(context,event) {
      context.commit('deleteEvent', event)
    },
    deleteParticipant(context,payload) {
      context.commit('deleteParticipant', payload)
    }
  },

  getters: {
    getEvents(state) {
      return state.events
    },
  },

  mutations: {
    addEvent(state, event) {
      const id = state.events.length + 1
      let _event=Object.assign(event, { id: id })
      state.events.push(_event)
      localStorage.setItem('events',JSON.stringify(state.events))
    },

    addParticipant(state, payload) {
      state.events.forEach(function(item, index) {
        if (item.id == payload.event.id) {
          const participantId = state.events[index].participants.length + 1
          let _participants = Object.assign(payload.participant, { participantid: participantId })
          state.events[index].participants.push(_participants)
        }
      })
    },

    deleteEvent(state, event) {
      state.events.forEach(function(item, index) {
        if (item.id == event.id) {
          state.events.splice(index, 1)
        }
      })
      localStorage.setItem('events',JSON.stringify(state.events))
    },

    editEvent(state, event) {
      state.events.forEach(function(item, index) {
        if(item.id==event.id) {
          state.events[index] = event
        }
      })
      localStorage.setItem('events',JSON.stringify(state.events))
    },

    editParticipant(state, payload) {
      state.events.forEach(function(item, index) {
        if(item.id==payload.event.id) {
          state.events[index].participants.forEach(function(itemparticipant, kindex) {
            if(itemparticipant.participantid==payload.participant.participantid) {
              console.log('hi')
              state.events[index].participants[kindex]=payload.participant
            }
          })
        }
      })
    },

    deleteParticipant(state,payload) {
      state.events.forEach(function(item, index) {
        if(item.id==payload.event.id) {
          state.events[index].participants.forEach(function(itemparticipant, kindex) {
            if(itemparticipant.participantid==payload.participant.participantid) {
              state.events[index].participants.splice(kindex, 1)
            }
          })
        }
      })
    }
  },

  state: {
    events: localStorage.getItem('events') ? JSON.parse(localStorage.getItem(events)) : []
  }
})

export default store
