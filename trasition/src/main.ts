import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import{ BiFileEarmarkFontFill} from 'oh-vue-icons/icons'

addIcons(BiFileEarmarkFontFill)


const app = createApp(App)
app.component('v-icon',OhVueIcon).use(router)

app.mount('#app')
