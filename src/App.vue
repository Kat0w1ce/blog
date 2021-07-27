<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <home class="homepage" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from "./views/Home.vue";
export default {
  name: "app",
  components: {
    Home,
    // HelloWorld
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100%;
}
.homepage {
  height: 100%;
}
</style>
