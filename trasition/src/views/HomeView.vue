<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <ListComponents/>
  </div>
</template>

<script lang="ts" >
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ListComponents from '@/components/ListComponents.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    ListComponents,
  },
});
</script>
