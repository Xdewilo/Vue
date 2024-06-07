<template>
  <div id="app">
    <CompositionSetup/>
  </div>
</template>

<script lang="ts" setup>
import PostCompositionAPI from './components/PostCompositionAPI.vue';
import OptionAPI from './components/OptionAPI.vue';
import CompositionSetup from './components/CompositionSetup.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
