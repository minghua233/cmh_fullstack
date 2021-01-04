<template>
  <div class="">
    <button @click="isOpen = true">open</button>
    <div v-if="isOpen">
      <p>ddddddddd</p>
      <button @click="isOpen = false">cancel</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const isOpen = ref(false)
    return {isOpen}
  }
}
</script>

<style>

</style>