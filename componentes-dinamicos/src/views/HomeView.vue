<template >
  <div>
    <h1>Listado ded Usuarios</h1>
      <button @click="handlerLayout(list)">Ver en lista </button>
      <button @click="handlerLayout(card)">Ver en tarjetas</button>
      <button @click="handlerLayout(table)">Ver en tabla </button>
  </div>
  <component :is="layout" :content="users"/> 

</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue';

const list = defineAsyncComponent(() => import('@/components/layout/ListLayout.vue')) 
const card = defineAsyncComponent(() => import('@/components/layout/CardLayout.vue'))
const table = defineAsyncComponent(() => import('@/components/layout/TableLayout.vue'))

const layout = ref(list)

const handlerLayout = (cmd : any) => layout.value = cmd


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