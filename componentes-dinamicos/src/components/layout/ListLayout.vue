<template >
  <div>
      <h1>Ver en lista </h1>
      <UserList v-for="item in data.content" :key="item.name" :content="item" />
    
  </div>
</template>
<script lang="ts" setup>

import { defineProps } from 'vue'
import UserList from '../UserList.vue';

const data = defineProps(['content'])

</script>
<style scoped>
  
</style>