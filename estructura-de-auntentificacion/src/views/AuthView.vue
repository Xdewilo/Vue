<template>
  <!-- The main heading of the authentication component -->
  <h1>This is an Auth</h1>
  
  <!-- Container for the form elements -->
  <div class="container">
    <!-- Form element for user login -->
    <form>
      <!-- Form group for the email input field -->
      <div class="form-group">
        <!-- Label for the email input field -->
        <label for="email">Email address</label>
        <!-- Email input field with Bootstrap classes and v-model binding to the email variable -->
        <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
      </div>
      
      <!-- Form group for the password input field -->
      <div class="form-group">
        <!-- Label for the password input field -->
        <label for="password">Password</label>
        <!-- Password input field with Bootstrap classes and v-model binding to the password variable -->
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
      </div>
      
      <!-- Submit button that triggers the loginUser function on click, with preventDefault to prevent page reload -->
      <button type="submit" class="btn btn-primary" @click.prevent="loginUser()">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
  // Importing the ref function from Vue to create reactive variables
  import { ref } from 'vue';
  // Importing the AuthService class to handle authentication
  import AuthService from '@/services/AuthService';

  // Creating reactive variables for email and password
  const email = ref('');
  const password = ref('');

  // Function to handle user login
  const loginUser = async () => {
    // Creating an instance of AuthService
    const authService = new AuthService();
    // Calling the login method of AuthService with the email and password values
    const success = await authService.login(email.value, password.value);

    // Alerting the user based on the success or failure of the login attempt
    if (success) {
      alert('Login Success');
    } else {
      alert('Login Failed');
    }
  };
</script>
