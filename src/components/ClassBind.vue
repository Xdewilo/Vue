<template>
    <p v-bind:class="{'danger': hasError}"> El mensaje enviado con Exito</p>
</template>


<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ClassBind',
        setup(){
            let hasError = false;
        }
    })
</script>

<style scoped>
    .danger{
        background-color: red;
    }
</style>
