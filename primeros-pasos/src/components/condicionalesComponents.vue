<template>
     <!-- Comentario: Este es el contenido del template -->
    <div v-if="age < 10">Hola mundo</div>
    <div v-else>Hola mundo 2</div>


</template>

<script lang="ts" setup>
    let age = 18
</script>


<style scoped>
.color-rojo{
    background-color:  red
}
</style>