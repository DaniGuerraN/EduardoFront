<template>

  <div id="app">

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #24ABE6;
  margin-top: 60px;
}
body{
  background-color: #9AC85F 
  }
.card{
  background-color: #24ABE6;
}

</style>
