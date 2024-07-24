<template >
  <h1>Notes</h1>
  <input type="text" placeholder="Digite note" v-model="note">
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
export default defineComponent({
  data(){
    return {
        note :''
    }
  },
    watch:{
        note(newVal, oldVal){
        alert("Valor nuevo ==>"+ newVal + "Valor antiguao ===>" +oldVal)
        localStorage.setItem('note', newVal)
        }
    }
})

</script>
<style scoped>
  
</style>