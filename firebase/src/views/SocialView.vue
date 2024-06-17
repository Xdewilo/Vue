<template>
    <div>Social Login</div>
    <button class="btn btn-primary" @click="loginGoogle">Login with Google</button>
    <button class="btn btn-info">Login with Facebook</button>
    <button class="btn btn-secondary">Login with Twitter</button>
    <button class="btn btn-dark">Login with GitHub</button>
</template>

<script lang="ts" setup>
import {GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider();
const auth = getAuth()

const loginGoogle =  () => {
    signInWithPopup(auth, googleProvider)
    .then( (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        alert('Success')
    })
    .catch((error) => {
        alert('Login failed');
    });
};

</script>

<style scope>
</style>