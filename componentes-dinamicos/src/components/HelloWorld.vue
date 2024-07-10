<template >
  <div>
    <h1>Listado ded Usuarios</h1>
      <button>Ver en lista </button>
      <button>Ver en tarjetas</button>
      <button>Ver en tabla </button>
  </div>
  <component :is="layout" :content="users"/> 

</template>
<script lang="ts" setup>
import { ref } from 'vue';
import TableLayout from './layout/TableLayout.vue'
import ListLayout from './layout/ListLayout.vue'
import CardLayout from './layout/CardLayout.vue'

const list = ref()
const card = ref()
const table = ref()

const layout = ref()

const users = ref([
{
  name : 'Juan',
  age : 20,
  position : 'Developer'
},
{
  name : 'Pedro',
  age : 30,
  position : 'Designer'
},
{
  name : 'Maria',
  age : 25,
  position : 'Developer'
},
{
  name : 'Ana',
  age : 35,
  position : 'Designer'
},
{
  name : 'Luis',
  age : 40,
  position : 'Developer'
},
{
  name : 'Carlos',
  age : 45,
  position : 'Designer'

}])


</script>
<style scoped>
  
</style>