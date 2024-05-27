<!-- PostDetail.vue -->
<template>
    <!-- Contenedor de la tarjeta que muestra los detalles del post -->
    <div class="card">
        <!-- Título del post -->
        <h3>{{ titulo }}</h3>
        <!-- Contenido del post -->
        <p>{{ contenido }}</p>
    </div>
</template>

<script lang="ts">
/* Importación de defineComponent desde Vue */
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'PostDetail',
    /* Definición de las props recibidas por el componente */
    props: {
        /* Prop 'titulo' es requerida y de tipo String */
        titulo: {
            type: String,
            required: true,
        },
        /* Prop 'contenido' es opcional y de tipo String, con valor por defecto */
        contenido: {
            type: String,
            required: false,
            default: 'no tiene contenido',
        },
    },
});
</script>

<style scoped>
/* Estilo para la tarjeta */
.card {
    width: 500px;
    height: 100px;
    background-color: blue;
    color: antiquewhite;
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
}
</style>