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
export default {
  getEvents,
  createEvent
}
