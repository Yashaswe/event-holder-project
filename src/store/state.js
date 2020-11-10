const state = {
  events: localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []
}

export default state