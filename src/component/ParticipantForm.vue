<template>
  <div id="participant-form">    
    <div class="participant-form-maincontent">
      <div>
        <input placeholder="Enter Name..." class="participantinfo name" v-model="participantData.name"/>
        <div v-if="error && error.name">
          <span class="error" v-for="name in error.name" :key="name"> {{ name }}</span>
        </div>
      </div>
      <div>
        <input placeholder="Enter Occupation..." class="participantinfo occupation" v-model="participantData.occupation"/>
        <div v-if="error && error.occupation">
          <span class="error" v-for="occupation in error.occupation" :key="occupation"> {{ occupation }}</span>
        </div>
      </div>
      <div>
        <input placeholder="Enter address..." class="participantinfo address" v-model="participantData.address"/>
        <div v-if="error && error.address">
          <span class="error" v-for="address in error.address" :key="address"> {{ address }}</span>
        </div>
      </div>
      <button class="action add" @click="saveParticipant()">{{ labelforparticipantsave }}</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      participantData: {}
    }
  },

  computed: {
    labelforparticipantsave() {
      return this.participantData.id ? 'Edit' : 'Add'
    }
  },

  name: 'participant-form',

  methods: {
    saveParticipant() {
      if(this.participantData.id) {
        this.$emit('updateParticipant:participant',this.participantData)
      }
      else {
        this.$emit('addParticipant:participant',this.participantData)
      }
    }
  },

  mounted() {        
    if(this.participant) {
      this.participantData=this.participant
    }
  },

  props: {
    participant: {
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

.action.add {
  background-color: #4A8DA2;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  padding: 10px;
  width: 25%;
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

#participant-form {
  text-align: center;
}

</style>
