<template>
  <div id="events">
    <div class="header">
      <div class="left-header">
        Events
      </div>
      <div>
        <button class="action add-event" @click="navigateToAdd(todos)">
          Add event
        </button>
      </div>
    </div>
    <div class="events">
      <div class="event" v-for="todo in todos" :key="todo.id">
        <div class="event-title">
          <h2>
            Event Title
          </h2>
        </div>
        <div class="event-date">
          <h5>
            Date:3 Nov
          </h5>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos:[]
    }
  },
  name: 'events',
  methods: {
    navigateToAdd(todos){
      this.index=todos.length+1
      this.$router.push({name:'AddEvent', params: {id:this.index,todo:null}})
    }
  }

  
}
</script>

<style>


.header {
  background-color: #4A8DA2;
  width: 97%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.left-header{
  color:white;
  font-size: 30px;
}

.action{
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  border: none;
  outline: none;
}

.event{
  background-color: #E6E6E6;
  border-radius: 20px;
  padding: 0px 10px 0px 10px;
  width: 97%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 10px;
}

.event-title{
  color: #4A8DA2;
}

</style>
