<template>
  <div>
    <ParentCoponents />
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ParentCoponents from '@/components/ParentCoponents.vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    ParentCoponents,
  },
});
</script>