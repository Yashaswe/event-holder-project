<template>
  <div id="display">
    <div class="display-content">
      <div class="display-header">
        <div>
          <button class="actiondisplay back" @click="navigateToPreviousPage">Back</button>
        </div>
        <div class="title">
          <h1>Event Title</h1>
        </div>
        <div class="display-right-header">
          <button class="actiondisplay edit" @click="editEvent">edit</button>
          <button class="actiondisplay delete" @click="deleteEvent">delete</button>
        </div>
      </div>
      <div class="display-maincontent">
        <p>Date:</p>
        <h4>location</h4>
        <div class="event-description">
          mklllllllllllnvdlfkkkkkkkkecause we are working our way through processing a large volume of applicant material,
          your application checklist confirming receipt of materials like your transcript, teacher recommendations, etc.
          is not yet active. Don’t worry—we will turn this on as soon as we know we’ve processed all of the material we
          have received, likely in early November. If anything is missing, we will give you ample time to resubmit 
          with no penalty to you. Because we are working our way through processing a large volume of applicant material,
          your application checklist confirming receipt of materials like your transcript, teacher recommendations, etc. 
          is not yet active. Don’t worry—we will turn this on as soon as we know we’ve processed all of the material we 
          have received, likely in early November. If anything is missing, we will give you ample time to resubmit with no
          penalty to you.
        </div>
        <br>
        <br>
        <div class="participant-section">
          <div class="participant-header">
            <h2>Participants</h2>
            <button class="actiondisplay add">Add</button>
          </div>
          <div class="participant-content">
            <div class="participant">
              <h2>Participant's Name</h2>
              <p>Occupation</p>
              <p>address</p>
              <button class="actiondisplay participant-edit" @click="editEventParticipant">edit</button>
              <button class="actiondisplay participant-delete" @click="deleteEventParticipant">delete</button>
            </div>
             <div class="participant">
              <h2>Participant's Name</h2>
              <p>Occupation</p>
              <p>address</p>
              <button class="actiondisplay participant-edit" @click="editEventParticipant">edit</button>
              <button class="actiondisplay participant-delete" @click="deleteEventParticipant">delete</button>
            </div>
            <div class="participant">
              <h2>Participant's Name</h2>
              <p>Occupation</p>
              <p>address</p>
              <button class="actiondisplay participant-edit" @click="editEventParticipant">edit</button>
              <button class="actiondisplay participant-delete" @click="deleteEventParticipant">delete</button>
            </div>
            <div class="participant">
              <h2>Participant's Name</h2>
              <p>Occupation</p>
              <p>address</p>
              <button class="actiondisplay participant-edit" @click="editEventParticipant">edit</button>
              <button class="actiondisplay participant-delete" @click="deleteEventParticipant">delete</button>
            </div>
            <div class="participant">
              <h2>Participant's Name</h2>
              <p>Occupation</p>
              <p>address</p>
              <button class="actiondisplay participant-edit" @click="editEventParticipant">edit</button>
              <button class="actiondisplay participant-delete" @click="deleteEventParticipant">delete</button>
            </div>
            <div class="participant">
              <h2>Participant's Name</h2>
              <p>Occupation</p>
              <p>address</p>
              <button class="actiondisplay participant-edit" @click="editEventParticipant">edit</button>
              <button class="actiondisplay participant-delete" @click="deleteEventParticipant">delete</button>
            </div>
          </div>
        </div>      
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'display',

  methods: {
    navigateToPreviousPage() {
      this.$router.go(-1)      
    },
    editEvent(){      
      this.$router.push({name:'EditEvent'})   
    },
    deleteEvent(){
      this.$router.push({name:'Events'})
    }    
  }  
  
}
</script>

<style>

.actiondisplay {
  background-color: #5B6365;
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 10px 20px 10px 20px;
  color: white;
  margin: 10px;
}

.actiondisplay.back {
  background-color: #E6E6E6;
  border-radius: 20px;
  font-size: 15px;
  padding: 15px;
  color: black;
}

.display-header {
  margin-bottom: 10px;
  padding: 8px 15px 8px 15px;
  width: 97%;
  display: flex;
  justify-content: space-between;
}

.title{
  color: #4A8DA2;
  margin-left: 85px;
}

.event-description{
  background-color: #E6E6E6;
  width: 85%;
  padding: 25px;
  border-radius: 20px;
  font-size: 20px;
  margin: auto;
}

.participant-header{
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: auto;
}

.participant{
  background-color: #4A8DA2;
  padding: 20px;
  border-radius: 20px;
  margin-top: 20px;
  color: white;
}

.participant-content {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

 

#display{
  text-align: center;
}

.display-maincontent{
  text-align: center;
}





</style>