<template>
   <div v-show="age < 10">Hola mundo</div>
   <div v-show="age > 10">Hola mundo 2</div>

</template>

a 
<script lang="ts" setup>
   let age = 18
</script>


<style scoped>
.color-rojo{
   background-color:  red
}
</style>