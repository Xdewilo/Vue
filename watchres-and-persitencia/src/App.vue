<template>
  <h3>{{ store.count }}</h3>
  <button @click="store.increment(1)">Añadir</button>
  <router-link :to="{name : 'watch'}">hola</router-link>
<router-view></router-view>

</template>

<script lang="ts" setup>
import { useExample } from '@/store/useExample'

const store = useExample()
store.init()
</script>





<style lang="scss">

</style>
