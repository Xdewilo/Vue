<template >
  <div>
    <h1>Counter</h1>
    <h3>{{counter}} x 2 = {{ getTwo }}</h3>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const counter = computed(() => store.state.counter); 
const getTwo = computed(() =>store.getters.getTwo);
const increment = () => store.commit('setCounter', counter.value + 1);



</script>
