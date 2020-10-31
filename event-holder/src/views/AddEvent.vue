<template>
  <div id="addEvent">
    <div class="add-content">
      <div class="add-header">
        <button class="action back" @click="navigateToPreviousPage">Back</button>
        <div class="title">
          <h2>Add Event</h2>
        </div>
      </div>
      <div class="add-maincontent">
        <div>
          <input placeholder="Enter Title..." class="addinfo eventtitle" v-model="event.title"/>
        </div>
        <div>
          <textarea placeholder="Enter Description..." class="addinfo description" v-model="event.description"/>
        </div>
        <div>
          <input placeholder="Enter Date..." class="addinfo eventdate" v-model="event.date"/>
        </div>
        <div>
          <input placeholder="Enter Location..." class="addinfo location" v-model="event.location" />
        </div>
        <button class="action add" @click="addEvent">ADD</button>    
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      event: {
        title: '',
        description: '',
        date: '',
        location: ''
      }
    }
  },

  name:'add',

  methods: {
    navigateToPreviousPage() {
      this.$router.go(-1)
    },
    addEvent() {
      this.$router.push({name: 'Events'})
      this.$store.dispatch('addEvent', this.event)
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

.addinfo {
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

#addEvent {
  text-align: center;
}

</style>