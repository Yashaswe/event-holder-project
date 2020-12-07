const state = {
  events: localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [],
  event: {},
  participants:{}
}

export default state