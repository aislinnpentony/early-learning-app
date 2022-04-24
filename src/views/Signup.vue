<template>
  <div class="signup container">
      <h2 class="center">Sign up here!</h2>

      <div class="field">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="name">
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email">
      </div>

      <div class="field">
        <label for="emaik">Re-enter Email</label>
        <input id="email" type="email" v-model="verify">
      </div>

       <div class="field">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password">
      </div>

      <p v-if="feedback" class="red-text center">{{ feedback }}</p>
      <div class="field center">
        <button class="btn todo-btn btn-secondary" @click="goToWelcome">Signup</button>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Signup',
  data(){
    return{
      name: null,
      email: null,
      password: null,
      verify: null,
      feedback: null,
      slug: null
    }
  },
 methods: {
     goToWelcome () {
        this.$router.push('/Welcome'); 
    
    }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

.btn-secondary {
  color: blue;
  background: #87CEFA;
  margin-top: 10px;
  padding: 10px 25px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  outline: none !important;
  border: none;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
}
.btn-secondary:focus{
  outline: none !important;
  box-shadow: none !important;
  color: #87CEFA!important;
  background: #87CEFA!important;
}
.btn-secondary:hover {background-color: white}

.btn-secondary:active{
  background: #60ecff!important;
  transform: translateY(4px);
  box-shadow: none !important;
}
.signup{
  max-width: 400px;
  margin-top: 60px;

}
.signup h2{
  font-size: 2.4em;
}
.signup .field{
  margin-bottom: 16px;
}
</style>