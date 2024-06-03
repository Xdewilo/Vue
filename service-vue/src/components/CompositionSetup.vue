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

</style>
