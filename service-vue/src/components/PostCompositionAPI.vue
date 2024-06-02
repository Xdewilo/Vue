<template>
    <h1>Listado de Post</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </li>
    </ul>
</template>

<script lang="ts">
import PostService from '@/services/PostService'
import { defineComponent, onMounted} from 'vue'

export default defineComponent({
    name: 'PostCompositionAPI',
    setup() {
        const service = new PostService()
        const posts = service.getAll()

        onMounted(async () => {
            await service.fetchAll()
        });
        return {
            posts
        }
    }
   
})

</script>

<style scope>
</style>