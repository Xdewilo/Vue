<!-- PostDetail.vue -->
<template>
    <!-- Contenedor de la tarjeta que muestra los detalles del post -->
    <div class="card">
        <!-- Título del post -->
        <h3>{{ props.titulo }}</h3>
        <!-- Contenido del post -->
        <p>{{ props.contenido }}</p>
        <!-- Botón que dispara el método handlerClick al hacer clic -->
        <input type="text" v-model="mensaje">
        <button @click="handlerClick">Di Hola</button>
    </div>
</template>

<script lang="ts">
/* Importación de defineComponent desde Vue */
import { defineComponent,Ref,ref} from 'vue';

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
    /* Declaración del evento emitido */
    emits: ['sayHi'],
    /* Definición del setup */
    setup(props, { emit }) {
        /* Método handlerClick que emite el evento sayHi */
        const handlerClick = () => {
            emit('sayHi', mensaje.value);
        };
        let mensaje : Ref<string> = ref('')
        return { props, handlerClick, mensaje };
    }
});
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




