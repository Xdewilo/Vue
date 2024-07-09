<template>
  <MainLayout>
    <template #main>
      <h5>Main content</h5>
    </template>

    <template #aux>
      <h5>Aux content</h5>
      <p>x : {{ x }} en y {{ y }}</p>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import { useMouse } from '@/composables/UseMouse';
import MainLayout from '@/layout/MainLayout.vue';

const { x, y } = useMouse();
</script>
