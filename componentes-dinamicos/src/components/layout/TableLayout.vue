<template >
  <div>
    <h1>table layout</h1>
    <UserRow v-for="item in data.content" :key="item.name" :content="item" />

  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import UserRow from '../UserRow.vue';

const data = defineProps(['content'])

</script>
<style scoped>
  
</style>