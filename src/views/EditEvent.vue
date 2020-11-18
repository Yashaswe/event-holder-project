<template>
  <div id="edit-Event">
    <div class="edit-content">
      <div class="edit-header">
        <button class="action back" @click="navigateToPreviousPage(notupdatedevent)">Back</button>
        <div class="title">
          <h2>Edit Event</h2>
        </div>
      </div>
      <Event-form @update:event="editEventFinal" :event="event" v-if="event"/>
      <div v-else>Loading...</div>         
    </div>
  </div>
</template>

<script>

import EventForm from '../component/EventForm.vue'

export default {
  components: {
    EventForm
  },

  data() {
    return {
      event: null,
      notupdatedevent:null
    }
  },
  
  name:'edit',

  methods: {
    navigateToPreviousPage(notupdatedevent) { 
      console.log('notupdate',notupdatedevent)     
      this.$router.push({name:'DisplayEvent',params:{id:notupdatedevent.id,event:notupdatedevent}})
    },
    editEventFinal(event) {
      console.log('edit',event)
      this.$store.dispatch('editEvent', event)
      this.$router.push({name: 'DisplayEvent',params:{id:event.id,event:event}})
    }  
   },
  mounted() {
    this.event = this.$route.params.event
    this.notupdatedevent = this.$route.params.event
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

.action.edit {
  background-color: #4A8DA2;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  padding: 10px;
  width: 25%;
}

.edit-header {
  align-content: center;
  border-bottom: solid 1px gray;
  margin-bottom: 10px;
  padding: 8px 15px 8px 15px;
  width: 97%;
}

.title {
  text-align: center;
}

.edit-info {
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

textarea {
  height: 100px;
}

#edit-Event {
  text-align: center;
}

</style>