import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { initializeApp } from 'firebase/app'; 

const firebaseConfig = {
    apiKey: "AIzaSyAcCMeWr8vyOipy1sE2VraurUzg4pLHNy0",
    authDomain: "curso-vue-f45f1.firebaseapp.com",
    projectId: "curso-vue-f45f1",
    storageBucket: "curso-vue-f45f1.appspot.com",
    messagingSenderId: "367100754137",
    appId: "1:367100754137:web:eda83528e35382bc0726c8",
    measurementId: "G-QMVG4VPG3X"
  };

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
