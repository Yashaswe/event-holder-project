<template>
  <div id="events">
    <div class="header">
      <div class="left-header">
        Events
      </div>
      <div>
        <button class="action add-event" @click="navigateToAdd(events)">
          Add event
        </button>
      </div>
    </div>
    <div class="events">
      <div v-if="!events.length" class="no_events">
        <b>No upcoming Events!!</b><br><br>
        ADD EVENT
      </div>
        <div class="event" v-for="event in events" :key="event.id" @click="navigateToDisplayEvent(event)">
          <div class="event-title">
            <h2>
              {{event.title}}
            </h2>
          </div>
          <div class="event-date">
            <h4>
              Date: {{event.date}}
            </h4>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      events:{}
    }
  },

  name: 'events',

  methods: {
    navigateToAdd() {
      this.$router.push({name:'AddEvent', params: {event:null}})
    },
    navigateToDisplayEvent(event) {
      this.$router.push({name:'DisplayEvent', params: {id:event.id,event: event}})
    }    
  },

  mounted() {
    // this.events=this.$store.getters.getEvents
    this.$store.dispatch('getEvents')
      .then(() => {
        this.events = this.$store.getters.getEvents
      })
  }  
}

</script>

<style>

.action {
  background-color: white;
  border-radius: 15px;
  border: none;
  outline: none;
  padding: 10px;
}
.event {
  background-color: #E6E6E6;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 10px;
  padding: 0px 25px 0px 25px;
  width: 85%;
}

.event-title {
  color: #4A8DA2;
}

.header {
  background-color: #4A8DA2;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 97%;
}

.left-header {
  color: white;
  font-size: 30px;
}

.no_events {
  text-align: center;
  margin: 150px;
  font-size: 30px;
  color: #E06777;
}

</style>
