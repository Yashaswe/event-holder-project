<template>
  <div id="edit-Event">
    <div class="edit-content">
      <div class="edit-header">
        <button class="action back" @click="navigateToPreviousPage(event)">Back</button>
        <div class="title">
          <h2>Edit Event</h2>
        </div>
      </div>
      <div class="edit-maincontent">
        <div>
          <input class="edit-info eventtitle" v-model="event.title" placeholder="Event Title"/>
        </div>
        <div>
          <textarea class="edit-info description" v-model="event.description" placeholder="Description"/>
        </div>
        <div>
          <input class="edit-info eventdate" v-model="event.date" placeholder="Date"/>
        </div>
        <div>
          <input class="edit-info location" v-model="event.location" placeholder="Location"/>
        </div>
        <button class="action edit" @click="editEventFinal(event)">SAVE</button>    
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      event:null
    }
  },
  
  name:'edit',

  methods: {
    navigateToPreviousPage(event) {
      this.$router.push({name:'DisplayEvent',params:{id:event.id,event:event}})
    },
    editEventFinal(event) {
      this.$store.dispatch('editEvent', event)
      this.$router.push({name: 'DisplayEvent',params:{id:event.id,event:event}})      
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