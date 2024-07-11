<template>
  <div>
    <h1>Ver en tarjetas</h1>
    <div class="container">
      <UserCard v-for="item in props.content" :key="item.name" :content="item" />
      {{ props.content.name }}
      {{ props.content.age }}
      {{ props.content.position }}
      
    </div>

  </div>
</template>

<script lang="ts" setup>
import UserCard from '../UserCard.vue';
import { defineProps } from 'vue'

const props = defineProps(['content'])
</script>



<style scoped>
.container {
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-self: center;
}

</style>