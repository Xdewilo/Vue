<template>
    <div>Social Login</div>
    <button class="btn btn-primary" @click="loginGoogle">Login with Google</button>
    <button class="btn btn-secondary" @click="loginTwitter">Login with Twitter</button>
    <button class="btn btn-info">Login with Facebook</button>
    <button class="btn btn-dark" @click="loginGitHub">Login with GitHub</button>
</template>

<script lang="ts" setup>
import { TwitterAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

// Crear instancias de los proveedores de autenticación
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();

// Obtener la instancia de autenticación
const auth = getAuth();

// Función para iniciar sesión con Google
const loginGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        alert('Success');
    })
    .catch((error) => {
        alert('Login failed');
    });
};

// Función para iniciar sesión con Twitter
const loginTwitter = () => {
    signInWithPopup(auth, twitterProvider)
    .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        alert('Success');
    })
    .catch((error) => {
        alert('Login failed');
    });
};

// Función para iniciar sesión con GitHub
const loginGitHub = () => {
    signInWithPopup(auth, githubProvider)
    .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        alert('Success');
    })
    .catch((error) => {
        alert('Login failed');
    });
};
</script>

<style scope>
</style>