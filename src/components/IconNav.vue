<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  iconClass: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span class="iconitem">
    <i :class="iconClass"></i>
    <span>{{ name }}</span>
  </span>
</template>

<style scoped>
  .iconitem {
    padding: 0 5px;
  }
  .iconitem i {
    padding-right: 0.2em;
  }
</style>