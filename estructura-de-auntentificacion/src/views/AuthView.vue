<template>
  <h1>This is an Auth </h1>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const email = ref('')
  const password = ref('')

</script>