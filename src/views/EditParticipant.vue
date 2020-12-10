<template>
  <div class="edit-participant">
    <div class="edit-content">
      <div class="edit-participant-header">
        <button class="action back" @click="navigateToPreviousPage(event)">Back</button>
        <div class="title">
          <h2>Edit Participant Information</h2>
        </div>
      </div>
      <ParticipantForm @updateParticipant:participant="editParticipant" :participant="participant" v-if="participant"/>
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
      participant: null
    }
  },

  name:'edit-participant',

  methods: {
    navigateToPreviousPage(event) {
      this.$router.push({name: 'DisplayEvent', params:{id:event.id, event: event}})
    },
    editParticipant(participant, event) {
      this.$store.dispatch('editParticipant', participant)
        .then(() => {
      this.$router.push({name: 'DisplayEvent',params:{id:event.id,event:event}})
        })  
    },
  },
  mounted() {
    this.event = this.$route.params.event
    this.participant = this.$route.params.participant
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

.action.edit-participant {
  background-color: #4A8DA2;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  padding: 10px;
  width: 25%;
}

.edit-participant-header {
  align-content: center;
  border-bottom: solid 1px gray;
  margin-bottom: 10px;
  padding: 8px 15px 8px 15px;
  width: 97%;
}

.title {
  text-align: center;
}

.participantinfo {
  background-color: #FAFAFA;
  border-radius: 20px;
  border: 2px solid #4A8DA2;
  color: #4A8DA2;
  font-family: serif;
  font-size: 25px;
  margin-top: 15px;
  outline: none;
  padding: 20px;
  width: 75%;
}

.edit-participant {
  text-align: center;
}

</style>
