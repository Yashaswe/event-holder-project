<template>
  <div id="edit-Event">
    <div class="edit-content">
      <div class="edit-header">
        <button class="action back" @click="navigateToPreviousPage">Back</button>
        <div class="title">
          <h2>Edit Event</h2>
        </div>
      </div>
      <div class="edit-maincontent">
        <div>
          <input class="edit-info eventtitle" v-model="event.title"/>
        </div>
        <div>
          <textarea class="edit-info description" v-model="event.description"/>
        </div>
        <div>
          <input class="edit-info eventdate" v-model="event.date"/>
        </div>
        <div>
          <input class="edit-info location" v-model="event.location" />
        </div>
        <button class="action edit" @click="editEvent">SAVE</button>    
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
  name:'edit',

  methods: {
    navigateToPreviousPage() {
      this.$router.go(-1)
    },
    editEvent() {
      this.$router.push({name: 'Events'})
      this.$store.dispatch('editEvent', this.event)
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