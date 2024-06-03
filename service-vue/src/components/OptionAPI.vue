<template>
    <h1>Listado de Post</h1>
    <div class="container">
    <ul class="post-list">
        <!-- Usa v-for para iterar sobre cada post y renderizarlos -->
        <li v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </li>
    </ul>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PostService from '@/services/PostService'
import IPost from '@/Interface/IPost';

export default defineComponent({
    name: 'OptionAPI',
    data() {
        // Crea una instancia de PostService
        const service = new PostService()
        return {
            service,
            // Inicializa posts como un array vacío
            posts: ref<IPost[]>([])
        }
    },
    async mounted() : Promise<void>{
        // Llama al método fetchAll del servicio para obtener las publicaciones
        await this.service.fetchAll()
        // Asigna las publicaciones obtenidas a la propiedad posts
        this.posts = this.service.getPosts().value
    }
})
</script>

<style scoped>

    .post-list {
        list-style: none;
        padding: 0;
        width: 50%;
    }

    .post-list li {
        margin-bottom: 20px;
        padding: 10px;
        background-color: #f2f2f2;
        border-radius: 5px;
    }

    .post-list li h2 {
        color: #333;
        font-size: 18px;
        margin-bottom: 5px;
    }

    .post-list li p {
        color: #666;
        font-size: 14px;
    }
    .container {
        display: flex;
        justify-content: center;
    }
</style>
