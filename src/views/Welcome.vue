<template>

    <div>
        <h1>Welcome to Early Learning</h1>
        <br>
        <p>Are you ready to learn and have some fun!!!</p>
        <p>Select your suitable Primary Class.</p>
        <br>
        <button type="button" class="btn quiz-btn btn-secondary" @click="goToP1">P1</button>
        <button type="button" class="btn quiz-btn btn-secondary" @click="goToP2">P2</button>
        <button type="button" class="btn quiz-btn btn-secondary" @click="goToP3">P3</button>
        <button type="button" class="btn quiz-btn btn-secondary" @click="goToP4">P4</button>
        <button type="button" class="btn quiz-btn btn-secondary" @click="goToP5">P5</button>
        <button type="button" class="btn quiz-btn btn-secondary" @click="goToP6">P6</button>
        <button type="button" class="btn quiz-btn btn-secondary" @click="goToP7">P7</button>
        <br>
        <br>
        <img class="welcome-pic" src="/welcome.png"  />

    </div>
</template>

<script>

export default {
   components: {
  },
  name: 'Welcome',
  data () {
    return {
      operator: null
    }
  },
  methods: {
     goToP1() {
         this.$router.push('/user/P1/P1Home')
     },
     goToP2 () {
         this.$router.push('/user/P2/P2Home')
     }, 
     goToP3 () {
         this.$router.push('/user/P3/P3Home')
     },
     goToP4 () {
         this.$router.push('/user/P4/P4Home')
     },
     goToP5 () {
         this.$router.push('/user/P5/P5Home')
     },
     goToP6 () {
         this.$router.push('/user/P6/P6Home')
     },
     goToP7 () {
         this.$router.push('/user/P7/P7Home')
     }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
.quiz-btn{
  color: #22577a;
  background: #b8f2e6;
  margin: 0px 6px !important;
  outline: none !important;
  border: none;
  font-family: "Quicksand", sans-serif;
}
.quiz-btn:focus{
  outline: none !important;
  box-shadow: none !important;
  color: #22577a !important;
  background: #7FFF00 !important;
}
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
</style>

<style lang="css">
</style>

