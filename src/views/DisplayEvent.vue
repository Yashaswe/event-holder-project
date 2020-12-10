<template>
  <div id="display">
    <Loading v-if="loading" />
    <div v-else class="display-content">
      <div v-if="event">
        <div class="display-header">
          <div>
            <button class="actiondisplay back" @click="navigateToPreviousPage">Back</button>
          </div>
          <div class="title">
            <h1>{{event.title}}</h1>
          </div>
          <div class="display-right-header">
            <button class="actiondisplay edit" @click="editEvent(event)">edit</button>
            <button class="actiondisplay delete" @click="deleteEvent(event)">delete</button>
          </div>
        </div>
        <div class="display-maincontent">
          <p>{{event.date}}</p>
          <h4>{{event.location}}</h4>
          <div class="event-description">
            Description: {{event.description}}
          </div>
          <br>
          <br>
          <button class="actiondisplay all-events" @click="navigateToEvents">View All Events</button>
          <br><br>
          <div class="participant-section">
            <div class="participant-header">
              <h2>Participants</h2>
              <button class="actiondisplay add" @click="addParticipant(event)">Add</button>
            </div>
            <div class="participant-content">  
              <Loading v-if="participants_loading"/>       
              <div v-else class="participant" v-for="participant in participants" :key="participant.id">
                <h2>{{participant.name}}</h2>
                <p>{{participant.occupation}}</p>
                <p>{{participant.address}}</p>
                <button class="actiondisplay participant-edit" @click="editParticipantInfo(event,participant)">edit</button>
                <button class="actiondisplay participant-delete" @click="deleteParticipant(participant)">delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Loading from '@/component/Loading.vue'

export default {
  components: {
    Loading
  },
  data() {
    return {
      event: null,
      participants: {},
      participant: {},
      loading: false,
      participants_loading: false
    }
  },

  name: 'display',

  methods: {
    navigateToPreviousPage() {
      this.$router.push({name:'Events'})
    },
    editEvent(event) {
      this.$router.push({name:'EditEvent',params: {id:event.id,event: event}})
    },
    deleteEvent(event) {
      this.$store.dispatch('deleteEvent',event.id)
        .then(() => {
          this.$router.push({name:'Events'})
        })   
    },
    navigateToEvents() {
      this.$router.push({name:'Events'})
    },
    addParticipant(event) {
      this.$router.push({name:'AddParticipant',params: {id: event.id,event: event}})
    },
    editParticipantInfo(event,participant) {
      this.$router.push({name: 'EditParticipant',params: {participantid: participant.id, participant: participant, event:event}})      
    },
    deleteParticipant(participant) {
      this.$store.dispatch('deleteParticipant', participant.id)
      this.$store.dispatch('getParticipants')
      .then(() => {
        this.participants = this.$store.getters.getParticipants
        console.log('particpants',this.$store.getters.getParticipants)
      })
    }
  },

  mounted() {
    this.loading = true    
    
    if (this.$route.params.event) {
      localStorage.setItem('eventId',this.$route.params.event.id)
    }
    this.$store.dispatch('getEvent',localStorage.getItem('eventId'))
      .then(() => {
        this.event = this.$store.getters.getEvent
        this.loading = false
    })
      .catch(() => {
        this.loading = false
      })

    this.participants_loading = true
    this.$store.dispatch('getParticipants')
      .then(() => {
        this.participants = this.$store.getters.getParticipants
        this.participants_loading = false
    })
      .catch(() => {
        this.participants_loading = false
      })
  }
}
</script>

<style>

.actiondisplay {
  background-color: #5B6365;
  border-radius: 15px;
  border: none;
  color: white;
  margin: 10px;
  outline: none;
  padding: 10px 20px 10px 20px;
}

.actiondisplay.back {
  background-color: #E6E6E6;
  border-radius: 20px;
  color: black;
  font-size: 15px;
  padding: 15px;
}

.display-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 8px 15px 8px 15px;
  width: 97%;
}

.title {
  color: #4A8DA2;
  margin-left: 85px;
}

.event-description {
  background-color: #E6E6E6;
  border-radius: 20px;
  font-size: 20px;
  margin: auto;
  justify-content: center;
  padding: 25px;
  width: 85%;
}

.participant-header {
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 85%;
}

.participant {
  background-color: #4A8DA2;
  border-radius: 20px;
  color: white;
  margin-top: 20px;
  padding: 20px;
}

.participant-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.actiondisplay.all-events {
  background-color: #E06777;
} 

#display {
  text-align: center;
}

.display-maincontent {
  text-align: center;
}

</style>
