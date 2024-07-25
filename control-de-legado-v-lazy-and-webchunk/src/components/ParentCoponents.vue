<template>
  <h1>ParentCoponents</h1>
    <button @click="banco">Subir cuenta</button>

  <ChildComponets ref="porcentaje"/>
</template>

<script lang="ts" setup>
import ChildComponets from "@/components/ChildComponets.vue";
import { ref } from "vue";

const porcentaje = ref(0);

const banco = () =>{
    console.log('Cuenta subida')
    porcentaje.value.recalcular();
}

</script>

<style scoped></style>
