<template>
  <div id="addEvent">
    <div class="event-form-header">
        <button class="action back" @click="navigateToPreviousPage">Back</button>
        <div class="title">
          <h2>Add Event</h2>
        </div>
      </div>
    <Event-form @saveEvent:event="eventEvent"/>  
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
      event: {
        title: '',
        description: '',
        date: '',
        location: '',
        participants: []
      }
    }
  },

  name:'add',
  methods: {
    navigateToPreviousPage() {
      this.$router.go(-1)
    },
    saveEvent(event) {
      this.$store.dispatch('addEvent', event)
      this.$router.push({name: 'Events'})
    }  
  }
}

</script>

<style>

.event-form-header {
  align-content: center;
  border-bottom: solid 1px gray;
  margin-bottom: 10px;
  padding: 8px 15px 8px 15px;
  width: 97%;
}

.title {
  text-align: center;
}

#addEvent {
  text-align: center;
}

</style>
