<template>
    <h1>Listado de Post</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </li>
    </ul>
</template>

<script lang="ts" >
import PostService from '@/services/PostService'
import { defineComponent, onMounted} from 'vue'

export default defineComponent({
    name: 'OptionAPI',
    data() {
        const service = new PostService()
        const posts = service.getPosts()
        return { posts, service }
    },
    async mounted() {
        await this.service.fetchAll()
    
    }
   
})

</script>

<style scope>
</style>