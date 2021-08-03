<template>
  <div class="circle" :style="{backgroundColor: color}">
    {{precentage}}
  </div>
</template>

<script>
export default {
  name: 'Circle',
  props: {
    precentage: {
      type: Number,
      default: 5,
      required: true,
    },
    color: {
      type: String,
      default: '#000000',
      required: true,
    },
    position: {
      type: Object,
      default: () => ({
        x: 100,
        y: 100
      }),
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
