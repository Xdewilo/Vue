<template >
  <div>
      Hello pinia
      <h1>Counter</h1>
      <h2>{{ store.count }}</h2>
      <h3>{{ store.count }} x 2 = {{ store.time2 }}</h3>
      <button @click="store.incremet()">Increment</button>
      

  </div>
</template>
<script lang="ts" setup>

import { useCounterStore} from '../store/counter'
const store = useCounterStore()


</script>
<style scoped>
  
</style>