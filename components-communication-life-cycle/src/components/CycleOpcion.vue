<template >
  <div>
    Hola mundo
  </div>
</template>


<script lang="ts">
//             !OPTION API¡
import { defineComponent} from "vue";
 export default defineComponent({
    name:'CycleOpcion',
    created() {
        console.log('create')
    },
    mounted() {
        console.log('montado')
    },
    updated() {
        console.log('updated')
    },
    unmounted() {
        console.log('unmounted')
    },
 })

</script>

<style scoped>
  
</style>