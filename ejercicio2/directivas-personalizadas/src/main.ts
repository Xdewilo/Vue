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

app.directive('custom-size2', {
    beforeMount: (el, binding) => {
        let size : number
        switch (binding.arg) {
            case 'sm':
                size = 10
            break;

            case 'md':
                size = 18
            break

            case 'lg':
                size = 28
            break;

            case 'xl':
                size = 50
            break;

            case 'xxl':
                size = 100
            break;

            default:
                size = 200
            break;
        }
        el.style.fontSize = size + "px"
    }
})

app.directive('custom-font', {
    beforeMount: (el, binding) => {
        let size = 18
        let color = ''
        if (binding.modifiers.sm) {
            size = 10            
        }else if(binding.modifiers.lg){
            size = 25
        }else if (binding.modifiers.xxl) {
            size = 72
        }
        
        el.style.fontSize = size + "px"

        if (binding.modifiers.red) {
            color = '#ff0000'
        }else if (binding.modifiers.green) {
            color = '#00ff00'
        }else if (binding.modifiers.blue) {
            color = '#0000ff'
        }
        el.style.color = color 
    }
})
// Monta la aplicación en el elemento con id 'app' en el DOM
app.mount('#app')