<template>
    <img v-lazy="{
      src: lazyOptions.src,
      lifecycle: lazyOptions.lifecycle,
      delay: lazyOptions.delay
    }"/>
</template>
  
<script lang="ts" setup>
  import { ref } from 'vue';
  const lazyOptions = ref({
    src: 'https://picsum.photos/1280/800',
    delay: 500,
    lifecycle: {
      loading: (el:any) => {
        console.log('cargando imagen', el);
      },
      error: (el:any) => {
        console.log('error en la carga', el);
      },
      loaded: (el:any) => {
        console.log('imagen cargada', el);
      }
    }
  });
</script>
  
<style>
img[lazy = 'loading'] {
  background: url('https://picsum.photos/1280/800');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  transition: filter 0.5s;
}
img[lazy = 'loaded'] {
  filter: blur(0);
}
image[lazy = 'error'] {
  background: red;
}

</style>
  