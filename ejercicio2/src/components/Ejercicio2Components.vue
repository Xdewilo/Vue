<template>
    <div>
      <!-- Etiqueta para el campo de texto del subtotal -->
      <label>Subtotal</label>
      <!-- Campo de texto con enlace bidireccional al valor 'subtotal' -->
      <input type="text" v-model="subtotal">
    </div>
    <!-- Muestra el total del IVA a pagar calculado y el porcentaje del IVA -->
    <h3>Total impuesto a pagar {{ totalVat }} ({{ vat }}%)</h3>
</template>
  
<script lang="ts" setup>
    // Importación de funcionalidades de Vue
    import { Ref, ref, computed } from "vue";
  
    // Definición de la tasa de IVA (21%)
    const vat = 21;
  
    // Definición del valor reactivo 'subtotal' para almacenar el valor del subtotal
    let subtotal: Ref<number> = ref(0);
  
    // Definición de un valor computado 'totalVat' que calcula el IVA total a pagar
    const totalVat = computed(() => (vat * subtotal.value) / 100);
  
    /*
    Fórmula para el cálculo del IVA:
    
    Si el subtotal es 100, el IVA es 21. Se calcula con la fórmula:
    (21 * subtotal) / 100
  
    Ejemplo:
    Si el subtotal es 200:
    Total IVA = (21 * 200) / 100 = 42
    */
</script>
  
  <!-- Estilos scoped (limitados a este componente) -->
<style scoped>
</style>