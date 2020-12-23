const state = {
  events: [],
  event: {},
  participants:{},
  token: localStorage.getItem('accessToken') || ''
}

export default state