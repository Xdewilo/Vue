<template>
  <h1>Listado de Post</h1>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import PostService from "@/services/PostService";
import { onMounted } from "vue";

const service = new PostService();
const posts = service.getPosts();

onMounted(async () => {
  await service.fetchAll();
});
</script>

<style scope>
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
