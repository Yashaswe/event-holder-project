import { v4 as uuid } from 'uuid'

const mutations =  {
  addEvent(state, event) {
    const id = uuid()
    console.log(id)
    let _event=Object.assign(event, { id: id })
    state.events.push(_event)
    localStorage.setItem('events',JSON.stringify(state.events))
  },

  addParticipant(state, payload) {
    state.events.forEach(function(item, index) {
      if (item.id == payload.event.id) {
        const participantId = uuid()
        let _participants = Object.assign(payload.participant, { participantid: participantId })
        state.events[index].participants.push(_participants)
      }
    })
    localStorage.setItem('events',JSON.stringify(state.events))
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
            state.events[index].participants[kindex]=payload.participant
          }
        })
      }
    })
    localStorage.setItem('events',JSON.stringify(state.events))
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
    localStorage.setItem('events',JSON.stringify(state.events))
  },
  updateEvents(state, events) {
    state.events = events
  }
}

export default mutations