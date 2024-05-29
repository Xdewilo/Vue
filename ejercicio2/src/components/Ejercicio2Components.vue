<template>
  <div>
  <label >Subtotal</label>
    <input type="text" v-model="subtotal" >
  </div>
  <h3>Total impuesto a pagar {{ totalVat }} ({{ vat }})</h3>
</template>

<script lang="ts" setup>
import { Ref, ref, computed } from "vue";

const vat = 21;
let subtotal: Ref<number> = ref(0); 
const totalVat = computed(() =>(vat *subtotal.value)/ 100 )

/*

100 -------------- subtotal
21 ---------------- X
x 0 (21 * subtotal)/ 100

*/
</script>

<style scoped></style>
