import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'

const getEvents = () => new Promise((resolve, reject) => {
  addAuthorizationHeader()
  axios.get('/events')
  .then((response) => {
    resolve(response.data)
  })
  .catch((error) => {
    reject(error)
  })
})

const getEvent = (eventid) => new Promise((resolve, reject) => {
  addAuthorizationHeader()
  axios.get(`/events/${eventid}`)
  .then((response) => {
    resolve(response.data)
  })
  .catch((error) => {
    reject(error)
  })
})


const createEvent = (event) => new Promise((resolve, reject) => {
  addAuthorizationHeader()
  axios.post('/events',{
    title: event.title,
    description: event.description,
    date: event.date,
    location: event.location})
  .then((response) => {
    resolve(response.data)
  })
  .catch((error) => {
    reject(error.response.data)
  })
})

const deleteEvent = (eventId) => new Promise((resolve,reject) => {
  addAuthorizationHeader()
  axios.delete(`/events/${eventId}`)
  .then((response) => {
    resolve(response.data)
  })
  .catch((error) => {
    reject(error)
  })
})

const editEvent = (event) => new Promise((resolve,reject) => {
  addAuthorizationHeader()
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
    reject(error.response.data)
  })
})

const editParticipant = (participant) => new Promise((resolve, reject) => {
  addAuthorizationHeader()
  axios.put(`/participant/${participant.id}`,{
    name: participant.name,
    occupation: participant.occupation,
    address: participant.address
  })
  .then((response) => {
      resolve(response.data)
  })
  .catch((error) => {
      console.log('error',error)
      reject(error.response.data)
  })
})

const createParticipant = ({participant, event_Id}) => new Promise((resolve, reject) => {
  addAuthorizationHeader()
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
    reject(error.response.data)
  }) 
})

const deleteParticipant = (participantId) => new Promise((resolve,reject) => {
  addAuthorizationHeader()
  axios.delete(`/participants/${participantId}`)
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
})

const login = (loginData) => new Promise((resolve, reject) => {
  axios.post('/login', {
    email: loginData.email,
    password: loginData.password
  })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error.response.data)
    })
})

const addAuthorizationHeader = () => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`
}


export default {
  getEvents,
  createEvent,
  deleteEvent,
  editEvent,
  createParticipant,
  deleteParticipant,
  getEvent,
  editParticipant,
  login
}
