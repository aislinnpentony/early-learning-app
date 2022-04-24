<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>


<style>
* {
  padding: 0;
  margin: 0;
}

/*font*/ 
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap'); 

body{
  background: #E5F9E0;

}

#app {
 font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2D3047;
}

.logo-image{
  position: relative;
  right: 30px;

}
</style>
