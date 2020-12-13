<template>
  <div id="addParticipant">
    <div class="add-content">
      <div class="add-header">
        <button class="action back" @click="navigateToPreviousPage(event)">Back</button>
        <div class="title">
          <h2>Add Participant</h2>
        </div>

      </div>   
      <ParticipantForm @addParticipant:participant="addParticipant" :error="error"/>
    </div>
  </div>
</template>

<script>

import ParticipantForm from '../component/ParticipantForm.vue'
export default {
  components: {
    ParticipantForm
  },

  data() {
    return {
      event: {},
      event_Id:null,
      participant: {},
      error: {}
    }
  },

  name:'add-participant',

  methods: {
    navigateToPreviousPage(event) {
      this.$router.push({name: 'DisplayEvent', params:{id:event.id, event: event}})
    },
    addParticipant(participant,event_Id) {
      event_Id = this.event.id
      this.$store.dispatch('createParticipant', {participant,event_Id})
        .then(() => {
          this.$router.push({name: 'DisplayEvent', params:{id: this.event.id, event: this.event}})
        })
        .catch((error) => {
          this.error=error
        })
    }
  },
  mounted() {
    this.event = this.$route.params.event
  } 
}

</script>

<style>

.action.back {
  background-color: #E6E6E6;
  border-radius: 20px;
  float: left;
  font-size: 15px;
  padding: 15px;
}

.add-header {
  align-content: center;
  border-bottom: solid 1px gray;
  margin-bottom: 10px;
  padding: 8px 15px 8px 15px;
  width: 97%;
}

.title {
  text-align: center;
}

#addParticipant {
  text-align: center;
}

</style>
