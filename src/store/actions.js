const actions = {  
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
}

export default actions