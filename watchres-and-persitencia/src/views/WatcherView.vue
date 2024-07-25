<template >
  <h1>Notes</h1>
  <input type="text" placeholder="Digite note" v-model="note">
</template>
<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
export default defineComponent({
  setup(){
    const note = ref("")
    watchEffect(() => alert("Se ha modificado el valor: "+ note.value))

    return{
      note
    }
  }
})
</script>
<style scoped>
  
</style>