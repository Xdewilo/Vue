<template >
  <div>
    <div class="post-card">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </div>
    <router-link :to="{name: 'PostList'}" >Volver atras</router-link>
  </div>
</template>
<script lang="ts" setup>
import PostService from '@/services/PostService';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const service = new PostService();
const post = service.getPost();


onMounted(async () => {
    const $route = useRoute();
    let id = $route.params.id;
    await service.fetchById(id.toString());
});
</script>
<style scoped>
  
</style>