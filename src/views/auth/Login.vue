<template>
  <div class="login">
    <Center>
    <div class="login-header">
        Login
    </div>
    </Center>
    <div>
      <input type="text" placeholder="Email" v-model="loginData.email" class="login-data email"/>
      <br/>
      <input type="password" placeholder="Password" v-model="loginData.password" class="login-data password"/>
      <br/>
      <button class="login-button" @click="login">Login</button>       
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginData: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    login() {
      this.$store.dispatch('login', this.loginData)
        .then(() => {
          this.$router.push({name: 'Events'})
        })
    }
  }
}
</script>

<style>

.login {
  text-align: center;
}

.login-header {
  background-color: #4A8DA2;
  padding: 20px;
  width: 90%;
  justify-content: center;
  color: white;
  font-size: 30px;
  text-align: center;
}

.login-data {
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

.login-button {
  background-color: #4A8DA2;
  color: white;
  outline: none;
  font-size: 20px;
  margin-top: 20px;
  padding: 10px;
  width: 25%;
}
</style>
