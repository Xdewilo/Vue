<template>
    <h1>Porcentaje completado:{{ percentage }}</h1>
</template>
<script lang="ts" setup>
import { Ref, ref, onMounted, defineExpose } from 'vue';

const percentage: Ref<number> = ref(0);
onMounted(() => {
    //trae el valor del porcentaje del servicio
    percentage.value = 23;
})
const recalcular = () => {
    percentage.value = 45;
}
defineExpose({
    recalcular
})
</script>




<style scoped></style>