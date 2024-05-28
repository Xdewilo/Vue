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
