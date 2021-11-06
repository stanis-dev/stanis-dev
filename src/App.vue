<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="content">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  background-color: #252526;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  a {
    color: white;
    text-decoration: none;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ced7e0;
  margin-top: 60px;
  margin: auto;
  width: 800px;
}
</style>

<style lang="scss" scoped>
.content {
  width: 500px;
  margin: 20px auto;
}
</style>
