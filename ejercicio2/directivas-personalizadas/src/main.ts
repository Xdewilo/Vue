import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Definición de directivas personalizadas

// Directiva 'font-size' que establece un tamaño de fuente fijo de 71px
app.directive('font-size', {
    beforeMount: (el) => {
        // Asigna el tamaño de fuente de 71px al elemento
        el.style.fontSize = "71px"
    }
})

// Directiva 'custom-size' que establece el tamaño de fuente basado en el valor proporcionado
app.directive('custom-size', {
    beforeMount: (el, binding) => {
        // Asigna el tamaño de fuente basado en el valor de binding.value, en píxeles
        el.style.fontSize = binding.value + 'px'
    }
})

// Monta la aplicación en el elemento con id 'app' en el DOM
app.mount('#app')