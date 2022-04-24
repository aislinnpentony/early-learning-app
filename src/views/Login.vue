<template>
  <div class="login container" @submit.prevent="login">
    <form class="card-panel">
      <h2 class="center">Already got an account? Log in here!</h2>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password">
      </div>
      <p v-if="feedback" class="red-text center">{{ feedback }}</p>
      <div class="field center">
        <button class="btn todo-btn" @click="goToWelcome">Login</button>
      </div>
       <p class="forgot-password">
                <router-link to="/ForgotPassword">Forgotten password?</router-link>
            </p>
    </form>
      <div class="field center">
      <button v-on:click="googleLogin" class="social-button">
        <img alt="Google Logo" src="../assets/google-logo.png">
      </button>
      </div>
  </div>
</template>

<script>

//import firebase from 'firebase'
//import db from '/firebase/init'
export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      feedback: null
    }
  },
  methods: {
    googleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
        console.log(result)
        console.log('Success Google Account Linked')
        this.$router.replace('Welcome')
      }).catch((err) => {
        alert('Oops. ' + err.message)
        console.log(Failed)
      })
    },

    login () {
      if (this.email && this.password) {
        this.feedback = null
        this.goToWelcome()
      } else {
        this.feedback = 'Please fill in both fields' 
      }
    },

    goToWelcome() {
      this.$router.push('/Welcome');
    },
    }
  }

</script>

<style>
.login{
  max-width: 400px;
  margin-top: 60px;
}
.login h2{
  font-size: 2.4em;
}
.login .field{
  margin-bottom: 16px;
}
 .social-button {
    width: 175px;
  -webkit-filter: drop-shadow(2px 2px 2px #222);
  filter: drop-shadow(2px 2px 2px #222);
  }
  .social-button:active {
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
  }
  .social-button img {
    width: 100%;
  }
</style>