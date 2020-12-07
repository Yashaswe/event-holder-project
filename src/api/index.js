import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'

const getEvents = () => new Promise((resolve, reject) => {
  axios.get('/events')
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
})

const getEvent = (eventid) => new Promise((resolve, reject) => {
  console.log(eventid)
  axios.get(`/events/${eventid}`)
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
})


const createEvent = (event) => new Promise((resolve, reject) => {
  axios.post('/events',{
    title: event.title,
    description: event.description,
    date: event.date,
    location: event.location})
  .then((response) => {
    resolve(response.data)
  })
  .catch((error) => {
    reject(error)
  })
})

const deleteEvent = (eventId) => new Promise((resolve,reject) => {
  axios.delete(`/events/${eventId}`)
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
})

const editEvent = (event) => new Promise((resolve,reject) => {
    axios.put(`/event/${event.id}`,{
      title: event.title,
      description: event.description,
      date: event.date,
      location: event.location      
    })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
})

const getParticipants = () => new Promise((resolve, reject) => {
  console.log()
  axios.get('/participants')
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
})

const editParticipant = (participant) => new Promise((resolve, reject) => {
  console.log(participant)
  axios.put(`/participant/${participant.id}`)
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
})

// const getParticipant = (event_Id) => new Promise((resolve, reject) => {
//   axios.get('/participants')
//     .then((response) => {
//       resolve(response.data)
//     })
//     .catch((error) => {
//       reject(error)
//     })
// })

const createParticipant = ({participant, event_Id}) => new Promise((resolve, reject) => {
  console.log(event_Id)
  axios.post('/participants',{
    name: participant.name,
    occupation: participant.occupation,
    address: participant.address,
    event_id: event_Id
  })
  .then((response) => {
    resolve(response.data)
  })
  .catch((error) => {
    reject(error)
  }) 
})

  //  const getParticipants = (context) => new Promise((resolve, reject) => {
  //   api.getParticipants()
  //     .then((response) => {
  //       context.commit('updateParticipants', response)
  //       resolve()
  //     })
  //     .catch((error) => {
  //       reject(error)
  //     })
  // })

const deleteParticipant = (participantId) => new Promise((resolve,reject) => {
  axios.delete(`/participants/${participantId}`)
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      25 |  reject(error)
    })
})

// const editEvent = (event) => new Promise((resolve,reject) => {
//     axios.put(`/event/$events{event.id}`,{
//       title: event.title,
//       description: event.description,
//       date: event.date,
//       location: event.location      
//     })
//     .then((response) => {
//       resolve(response.data)
//     })
//     .catch((error) => {
//       reject(error)
//     })
// })

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
