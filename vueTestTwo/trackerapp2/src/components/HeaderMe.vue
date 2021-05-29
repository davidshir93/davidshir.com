<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add Task" color="green"></Button>
  </header>
</template>

<script lang="ts">
import Button from "./Button";

export default {
  name: 'HeaderMe',
  components: { Button },
  props: {
    title: String
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
</style>
