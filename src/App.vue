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

</style>
