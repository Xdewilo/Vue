import { ref } from 'vue'

class PostService {

    private posts

    constructor() {
        this.posts = ref([])
    }

    async fetchAll() {
        try {
            const URL = 'https://jsonplaceholder.typicode.com/posts'
            const response = (await fetch(URL)).json()
            this.posts.value = await response
        } catch (error) {
            console.error(error)
        }
    }
    getPosts() {
        return this.posts
    }
}
export default PostService

