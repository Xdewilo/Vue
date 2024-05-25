<template>
  
  <ul>
    <li v-for="pais in paises">{{ pais }}</li>
  </ul>

  <ul>
    <li v-for="country in countries" :key="country.code">{{ country.name }}</li>
  </ul>


</template>
  
<script setup lang="ts">
    import { ref, Ref  } from 'vue';

    interface ICountry{
      code : string
      name : string
    }

    const paises:Ref<Array<ICountry>> = ref([
      'España', 'Francia', 'Reino Unido', 'Italia', 'Portugal'
    ]);

    const countries:Ref<Array<ICountry>> = ref([
      {
        code: 'es',
        name: 'españa'
      },
      {
        code: 'en',
        name: 'UK'
      },
      {
        code: 'es',
        name: 'españa'
      },
      {
        code: 'fr',
        name: 'francia'
      }
    ]);
      
</script>
  
<style scoped>

</style>
  