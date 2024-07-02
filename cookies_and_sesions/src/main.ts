import { createApp } from 'vue'
import App from './App.vue'
//npm install vue-cookies
import VueCookies from 'vue-cookies' 
//npm install vue-session
import VueSession from 'vue-session'

const app = createApp(App)  
app.use(VueCookies, {
    // config
    expireTimes: "1d",
})
.use(VueSession).mount('#app')


// cookies.set('auth' , 1000 <== value)
// cookies.get('auth') 
// cookies.remove('auth')
// cookies.isKey('auth')
// cookies.keys()


//session.start()
//session.set('auth', 1000)
//session.get('auth')
//session.id()
//session.remove('auth')
//session.destroy()

