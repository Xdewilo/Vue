<!-- PostDetail.vue -->
<template>
    <div class="card">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <input type="text" v-model="mensaje">
        <button @click="handlerClick">Di Hola</button>
    </div>
</template>

<script lang="ts" setup>
import {defineEmits , defineProps, Ref, ref } from 'vue';

    const props = defineProps({
        title: String,
        content : String
    })

    const emit = defineEmits(['sayHi'])

    const handlerClick = () => {
        emit('sayHi', mensaje.value);
    };

    let mensaje: Ref<string> = ref('')


</script>

<style scoped>
/* Estilo para la tarjeta */
.card {
    width: 500px;
    height: 150px;
    background-color: blue;
    color: antiquewhite;
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
}
</style>
