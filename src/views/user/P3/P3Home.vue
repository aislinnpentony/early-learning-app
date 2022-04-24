<template>
  <div id="app">
    <h1>Select one of the below subjects to access worksheets!!</h1>
    <button type="button" class="btn quiz-btn btn-secondary" @click="goToToMath">Math</button>
    <button type="button" class="btn quiz-btn btn-secondary" @click="goToToEnglish">English</button>
    <button type="button" class="btn quiz-btn btn-secondary" @click="goToToScience">Science</button>

  </div>
</template>

<script>

export default {
   components: {
  },
  name: 'P3',
  data () {
    return {
      operator: null
    }
  },
  methods: {
     goToToMath() {
      this.$router.push('/user/P3/MathSheet2')
    },
    goToToEnglish() {
      this.$router.push('/user/P3/EnglishSheet2')
    },
    goToToScience() {
      this.$router.push('/user/P3/ScienceSheet2')
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