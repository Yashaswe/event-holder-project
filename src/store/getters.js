const getters = {
  getEvents(state) {
    return state.events
  },
  getEvent(state) {
    return state.event    
  },
  getParticipants(state) {
    return state.participants
  }
}

export default getters