<template >
  <div>
  <button @click="showTrasition()">Mostra / ocultar</button>
  <Transition>
    <h1 v-if="show">Hello World</h1>
  </Transition>
    
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Transition } from 'vue'

const show = ref(false)
const showTrasition = () =>{
  show.value=!show.value
}

</script>
<style scoped>
/* Add a transition effect when adding or removing the element */
  .v-enter-active, .v-leave-active {
    transition: opacity 0.5s;
  }
  .v-enter-from, .v-leave-to {
    opacity: 0;
  }
</style>