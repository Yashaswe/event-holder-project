import api from '../api'
// const actions = {  
  // addEvent(context,event) {
  //   context.commit('addEvent', event)
  // },
  // editEvent(context,event) {
  //   context.commit('editEvent', event)
  // },
  // addParticipant(context,payload) {
  //   context.commit('addParticipant', payload)
  // },
  // editParticipant(context,payload) {
  //   context.commit('editParticipant', payload)
  // },
  // deleteEvent(context,event) {
  //   context.commit('deleteEvent', event)
  // },
  // deleteParticipant(context,payload) {
  //   context.commit('deleteParticipant', payload)
  // }
  const getEvents = (context) => new Promise((resolve, reject) => {
    api.getEvents()
      .then((response) => {
        context.commit('updateEvents', response)
        resolve()
      })
      .catch((error) => {
        reject(error)
      })
  })
  
  export default {
    getEvents
  }
  
// }

// export default actions