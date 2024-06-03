import { ref, Ref } from 'vue'
import IPost from '@/Interface/IPost';

class PostService {

    // Define una propiedad privada 'posts' de tipo Ref que contiene un array de IPost
    private posts: Ref<Array<IPost>>

    // El constructor inicializa 'posts' como una referencia a un array vacío de IPost
    constructor() {
        this.posts = ref<Array<IPost>>([])
    }
    // Retorna una referencia a un array de IPost
    getPosts(): Ref<Array<IPost>> {
        return this.posts
    }

    // Método asincrónico para obtener todas las publicaciones desde una API
    async fetchAll(): Promise<void> {
        try {
            const URL = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(URL)
            
            // Obtiene el JSON de la respuesta
            const json = await response.json() as Array<IPost>
            // Asigna el array de publicaciones a la propiedad 'posts'
            this.posts.value = json
        } catch (error) {
            console.error(error)
        }
    }
   
}

// Exporta la clase PostService para que pueda ser usada en otras partes de la aplicación
export default PostService
