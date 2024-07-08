<template>
  <div class="container mt-3">
    <form class="google-form mt-5">
      <div class="form-group">
        <input type="text" id="exampleInputName" v-model="name" required>
        <label for="exampleInputName">User name</label>
      </div>
      <div class="form-group">
        <input type="email" id="exampleInputEmail" v-model="email" required>
        <label for="exampleInputEmail">Email</label>
      </div>
      <div class="form-group">
        <input type="password" id="exampleInputPassword" v-model="password" required>
        <label for="exampleInputPassword">Password</label>
      </div>
      <button type="submit" class="submit-btn" @click.prevent="createUser">Submit</button>
      <router-link :to="{name: 'login'}" class="create-account">Sign in to your account</router-link>
      <br>
      <p class="response"> {{ response }}</p>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useAuth from '@/store/auth'
import router from '@/router';

const store = useAuth()
const name = ref('')
const email = ref('')
const password = ref('')

const response = ref('')

const createUser = async() => {
  response.value = "Processing..."

  const data = await store.register(name.value, email.value, password.value)

  if(data == false ){
    response.value = 'Registration failed'

  }else {

    router.push({ name: 'login' })
  }
}
</script>






<style scoped>
.google-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #333;
  color: white;
  border-radius: 8px;
}

.form-group {
  position: relative;
  margin-bottom: 25px;
  width: 100%;
}

.form-group input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: white;
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;
  background: transparent;
  transition: border-color 0.2s;
}

.form-group label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #999;
  pointer-events: none;
  transition: 0.2s ease all;
}

.form-group input:focus ~ label,
.form-group input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #4285F4;
}

.form-group input:focus {
  border-bottom: 2px solid #4285F4;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #4285F4;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #357AE8;
}

.create-account {
  display: block;
  text-align: center;
  margin-top: 15px;
  color: #4285F4;
  text-decoration: none;
}

.create-account:hover {
  text-decoration: underline;
}
.response{
  color: red;
}
</style>