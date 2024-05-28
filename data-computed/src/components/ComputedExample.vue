<template >
  <div>
    <input type="text"  v-model="msg"/>
    <h2>{{ msg }}</h2>
  </div>
</template>
<script lang="ts">
//option API
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'ComputedExample',
    data() {
        return {
            msg : ''
        }
    },
})

</script>
<style scoped>
  
</style>