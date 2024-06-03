import { ref,Ref } from 'vue'
import IPost from '@/Interface/IPost';

class PostService {

    private posts : Ref<Array<IPost>>

    constructor() {
        this.posts = ref<Array<IPost>>([])
    }
    getPosts ():Ref <Array<IPost>> {
        return this.posts
    }
    async fetchAll(): Promise<void> {
        try {
            const URL = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(URL)
            const json = await response.json()
            this.posts.value =  await json
        } catch (error) {
            console.error(error)
        }
    }
   
}
export default PostService

