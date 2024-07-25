import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import lazyLoad from 'vue3-lazyload'

const app = createApp(App)
.use(lazyLoad, {})
.use(router).mount('#app')
