<template >
    <h1>Notes</h1>
    <input type="text" placeholder="Digite note" v-model="note">
</template>
<script lang="ts">
  import { defineComponent, ref, watch } from 'vue'
  export default defineComponent({
    setup(){
        const note = ref("")
      watch(note, () =>alert("Se ha modificado el valor: "+ note.value))
        return{
            note
        }
    }
  })
  </script>
  <style scoped>
    
  </style>