<template>
  <div id="event-form">
    <div class="event-form-content">
      <div class="event-form-maincontent">
        <div>
          <input placeholder="Enter Title..." class="event-form eventtitle" v-model="eventData.title"/>
          <div v-if="error && error.title">
            <span class="error" v-for="title in error.title" :key="title"> {{ title }}</span>
          </div>
        </div>
        <div>
          <textarea placeholder="Enter Description..." class="event-form description" v-model="eventData.description"/>
          <div v-if="error && error.description">
            <span class="error" v-for="description in error.description" :key="description"> {{ description }}</span>
          </div>
        </div>
        <div>
          <input placeholder="Enter Date..." class="event-form eventdate" v-model="eventData.date"/>
          <div v-if="error && error.date">
            <span class="error" v-for="date in error.date" :key="date"> {{ date }}</span>
          </div>
        </div>
        <div>
          <input placeholder="Enter Location..." class="event-form location" v-model="eventData.location" />
          <div v-if="error && error.location">
            <span class="error" v-for="location in error.location" :key="location"> {{ location }}</span>
          </div>
        </div>
        <button class="action save" @click="saveEvent()">{{ submitButtonLabel }}</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    submitButtonLabel() {
      return this.eventData.id ? 'Edit' : 'Add'
    }
  },

  data() {
    return {
      eventData: {
        title: '',
        description: '',
        date: '',
        location: '',
        participants: []
      }
    }
  },

  name:'event-form',

  methods: {
    saveEvent() {
      if (this.eventData.id) {
        this.$emit('update:event', this.eventData)
      }
      else {
        this.$emit('saveEvent:event', this.eventData)
      }      
    }
  },

  mounted() {
    if(this.event) {
      this.eventData=this.event
    }
  },

  props: {
    event: {
      type: Object,
      required: false
    },
    error: {
      type: Object,
      required: false
    }
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

.action.save {
  background-color: #4A8DA2;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  padding: 10px;
  width: 25%;
}

.error {
  color: red;
}

.event-form {
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

#event-form {
  text-align: center;
}

</style>
