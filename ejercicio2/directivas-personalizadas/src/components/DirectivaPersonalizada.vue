<template>
  <!-- Contenedor principal -->
  <div>
    <!-- Párrafo con directiva personalizada 'v-font-size' que establece el tamaño de fuente fijo a 71px -->
    <p v-font-size>hola mundo</p>
    <!-- Párrafos con directiva personalizada 'v-custom-size' que establece el tamaño de fuente según el valor proporcionado -->
    <p v-custom-size="11">hola mundo</p>
    <p v-custom-size="22">hola mundo</p>
  </div>
</template>

<script lang="ts" setup>
</script>

<!-- Estilos scoped para este componente (vacío por ahora) -->
<style scoped>
</style>