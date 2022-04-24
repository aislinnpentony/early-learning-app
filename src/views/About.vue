<template>
  <div id="app">
    <h1>Subjects provided with Early Learning</h1>
    <p>Select one of the below buttons to view information on the subject area</p>
    <button type="button" class="btn quiz-btn btn-secondary" @click="goToToMath">Math</button>
    <button type="button" class="btn quiz-btn btn-secondary" @click="goToToEnglish">English</button>
    <button type="button" class="btn quiz-btn btn-secondary" @click="goToToScience">Science</button>
    <br>
    <br>
    <img class="about-pic" src="/about.png"  />
  </div>
</template>

<script>

export default {
   components: {
  },
  name: 'About',
  data () {
    return {
      operator: null
    }
  },
  methods: {
     goToToMath() {
      this.$router.push('/Math')
    },
    goToToEnglish() {
      this.$router.push('/English')
    },
    goToToScience() {
      this.$router.push('/Science')
  }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
.quiz-btn{
  color: #22577a; 
  background-color: #22577a; 
  background: #87CEFA!important;
  margin: 0px 6px !important;
  outline: none !important;
  border: none;
  font-family: "Quicksand", sans-serif;
}
.quiz-btn:focus{
  outline: none !important;
  box-shadow: none !important;
  color: #22577a !important;
  background: #22577a!important;
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
