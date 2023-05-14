<template>
  <div id="app">
    <Circle />
  </div>
</template>

<script>
import Circle from './components/Circle.vue';

export default {
  name: 'App',
  component: {
    Circle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
