<template>
    <div>
        <h1>Science</h1>
        <button type="button" class="btn quiz-btn btn-secondary" @click="goToToAbout">Back</button>
        <p>Enjoy a new interactive way to develop upon your Chemistry, Physics and Biology kowledge</p>
        <p>Through numerous different activites for each topic area students will find a new love for Science!!</p>
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
     goToToAbout() {
      this.$router.push('/About')

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
