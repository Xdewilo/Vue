<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/service">Service</router-link> |
            <router-link to="/contact">Contact</router-link>
        </nav>
        <router-view/>
    </div>
</template>