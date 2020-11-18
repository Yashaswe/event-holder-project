<template>
  <div id="addEvent">
    <Event-form></Event-form>    
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

}

</script>

<style>

#addEvent {
  text-align: center;
}

</style>
