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

  const getEvent = (context,eventid) => new Promise((resolve, reject) => {
    console.log(context)
    api.getEvent(eventid)
      .then((response) => {
        context.commit('updateEvent', response)
        resolve()
      })
      .catch((error) => {
        reject(error)
      })
  })

  const createEvent = (context,event) => new Promise((resolve, reject) => {
    console.log(context)
    api.createEvent(event)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })

  const deleteEvent = (context,eventId) => new Promise ((resolve,reject) => {
    console.log(context)
    api.deleteEvent(eventId)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })

  const editEvent = (context, eventId) => new Promise ((resolve, reject) => {
    console.log(context)
    api.editEvent(eventId)
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
  })

  const editParticipant = (context, participantId) => new Promise ((resolve, reject) => {
    console.log(context)
    api.editParticipant(participantId)
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
  })

  const createParticipant = (context, {participant, event_Id}) => new Promise((resolve, reject) => {
    console.log(context)
    api.createParticipant({participant, event_Id})
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })

  const deleteParticipant = (context,participantId) => new Promise ((resolve,reject) => {
    console.log(context)
    api.deleteParticipant(participantId)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })

  const getParticipants = (context) => new Promise((resolve, reject) => {
    api.getParticipants()
      .then((response) => {
        context.commit('updateParticipants', response)
        resolve()
      })
      .catch((error) => {
        reject(error)
      })
  })
  
  export default {
    getEvents,
    createEvent,
    deleteEvent,
    editEvent,
    createParticipant,
    deleteParticipant,
    getEvent,
    getParticipants,
    editParticipant
  }
  
// }

// export default actions
