<!-- PostList.vue -->
<template>
    <!-- Contenedor que contiene una lista de PostDetail -->
    <div class="container">
      <!-- Bucle v-for para iterar sobre el array info y renderizar PostDetail -->
      <PostDetail 
        v-for="item in info" 
        :key="item.title" 
        :titulo="item.title" 
        :contenido="item.content" 
      />
    </div>
</template>
  
  <script lang="ts" setup>
  /* Importación del componente PostDetail */
  import PostDetail from './PostDetail.vue';
  
  /* Definición de la interfaz Post */
  interface Post {
    title: string;
    content: string;
  }
  
  /* Array de objetos Post */
  const info: Array<Post> = [
    { title: 'Este es el post 1', content: 'contenido 1' },
    { title: 'Este es el post 2', content: 'contenido 2' },
    { title: 'Este es el post 3', content: 'contenido 3' },
    { title: 'Este es el post 4', content: 'contenido 4' },
    { title: 'Este es el post 5', content: 'contenido 5' },
    { title: 'Este es el post 6', content: 'contenido 6' },
  ];
  </script>
  
  <style scoped>
  /* Estilo para el contenedor de la lista de posts */
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  </style>
  