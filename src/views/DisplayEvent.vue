<template>
  <div id="display" v-if="event">
    <div class="display-content">
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
            <div class="participant" v-for="participant in event.participants" :key="participant.participantid">
              <h2>{{participant.name}}</h2>
              <p>{{participant.occupation}}</p>
              <p>{{participant.address}}</p>
              <button class="actiondisplay participant-edit" @click="editParticipantInfo(event,participant)">edit</button>
              <button class="actiondisplay participant-delete" @click="deleteParticipant(event,participant)">delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: null,
      participant: {}
    }
  },

  name: 'display',

  methods: {
    navigateToPreviousPage() {
      this.$router.go(-1)
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
      this.$router.push({name: 'EditParticipant',params: {participantid: participant.participantid, participant: participant, event:event}})      
    },
    deleteParticipant(event,participant) {
      console.log('here',participant)
      this.$store.dispatch('deleteParticipant', {event,participant})
    }
  },
  mounted() {
    this.event=this.$route.params.event
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
