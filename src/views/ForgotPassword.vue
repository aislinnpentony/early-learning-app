<template>
  <div class="forgotPassword container" @submit.prevent="forgot">
    <form class="card-panel">
      <h2 class="center">Re-set Password Here!!</h2>
      <div class="field">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password">
      </div>
           <div class="field">
                <label for="password">Re-enter Password</label>
                <input id="password1" type="password" v-model="password1">
            </div>
      <p v-if="feedback" class="red-text center">{{ feedback }}</p>
      <div class="field center">
        <button class="btn todo-btn btn-secondary" @click="goToWelcome">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
   data () {
    return {
      password: null,
      password1: null,
      feedback: null
    }
  },
  methods: {
    goToWelcome () {
        this.$router.push('/Welcome'); 
    
    }
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
  .todo-btn{
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

.todo-btn:focus{
  outline: none !important;
  box-shadow: none !important;
  color: #60ecff !important;
  background: #60ecff!important;
}
.todo-btn:hover {background-color: white}

.todo-btn:active{
  background: #60ecff!important;
  transform: translateY(4px);
  box-shadow: none !important;
}
</style>