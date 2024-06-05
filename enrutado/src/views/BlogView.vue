<template>
    <h1>Blog View</h1>
    <ul>
        <li><router-link :to="{name: 'post', params: {id: 1}}" >Primer Post</router-link></li>
        <li><router-link :to="{name: 'post', params: {id: 2}}" >Segundo Post</router-link></li>
        <li><router-link :to="{name: 'post', params: {id: 3}}" >Tercer Post</router-link></li>
    </ul>
</template>