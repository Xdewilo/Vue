<!-- ParentComponent.vue -->
<template>
  <!-- Contenedor principal que contiene tres componentes secundarios -->
  <div class="container">
    <!-- Componente CycleOpcion -->
    <CycleOpcion />
    <!-- Componente CycleComposition -->
    <CycleComposition />
    <!-- Componente PostList -->
    <PostList />
  </div>
</template>

<script lang="ts" setup>
/* Importación de componentes secundarios */
import CycleOpcion from './components/CycleOpcion.vue'
import CycleComposition from './components/CycleComposition.vue'
import PostList from './components/PostList.vue'
</script>

<style scoped>
/* Estilo para el contenedor principal */
.container {
  background-color: black;
  display: grid;
  justify-content: center;
}
</style>
