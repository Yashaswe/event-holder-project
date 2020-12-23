const getters = {
  getEvents(state) {
    return state.events
  },
  getEvent(state) {
    return state.event    
  },
  isUserLoggedIn(state) {
    if (state.token === '' || state.token === "undefined") {
      return false
    }
    else{
      return true
    } 
  }
  // getParticipants(state) {
  //   return state.participants
  // }
}

export default getters