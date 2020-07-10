<template>
  <div id="app">
    <Navbar />
    <br/>
    <br/>
    <br/>
    <!-- <Blog/> -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
// import Blog from '@/components/Blog'
export default {
  name: 'App',
  components : {
    Navbar
  }
}
</script>

<style>

</style>
