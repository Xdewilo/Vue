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
      <button type="submit" class="btn btn-primary" @click="loginUser()">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthService from '@/services/AuthService';

const email = ref('')
const password = ref('')

const router = useRouter()

const loginUser = async () => {
  const authService = new AuthService()
  const success = await authService.login(email.value, password.value)

  if (success) {
    alert('Login Success')
  } else {
    alert('Login Failed')
  }
}

</script>
