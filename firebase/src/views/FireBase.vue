<!-- src/components/LoginForm.vue -->
<template>
  <div class="container">
    <h1>FireBase Login</h1>
    <form @submit.prevent="loginUser">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary mt-3">Login</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
 
const email = ref('');
const password = ref('');

const loginUser = async () => {
  const auth = getAuth();
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    alert('User logged in');
  } catch (error) {
    alert('Error logging in');
  }
};

</script>
