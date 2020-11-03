<template>
  <div id="addParticipant">
    <div class="add-content">
      <div class="add-header">
        <button class="action back" @click="navigateToPreviousPage(event)">Back</button>
        <div class="title">
          <h2>Add Participant</h2>
        </div>
      </div>
      <div class="add-maincontent">
        <div>
          <input placeholder="Enter Name..." class="participantinfo name" v-model="participant.name"/>
        </div>
        <div>
          <input placeholder="Enter Occupation..." class="participantinfo occupation" v-model="participant.occupation"/>
        </div>
        <div>
          <input placeholder="Enter address..." class="participantinfo address" v-model="participant.address"/>
        </div>
        <button class="action add" @click="addParticipant(event,participant)">SAVE</button>        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      event:{},
      participant: {}
      
    }
  },

  name:'add-participant',

  methods: {
    navigateToPreviousPage(event) {
      this.$router.push({name: 'DisplayEvent', params:{id:event.id, event: event}})
    },
    addParticipant(event,participant) {
      this.$store.dispatch('addParticipant', {participant, event})
      this.$router.push({name: 'DisplayEvent',params:{id:event.id,event:event}}) 
    }
  },
  mounted() {
    this.event=this.$route.params.event  
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

.action.add {
  background-color: #4A8DA2;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  padding: 10px;
  width: 25%;
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

#addParticipant {
  text-align: center;
}

</style>
