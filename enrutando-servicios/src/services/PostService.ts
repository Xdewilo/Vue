import { ref, Ref } from 'vue';
import IPost from '@/Interface/IPost';

class PostService {
  private posts: Ref<Array<IPost>>;
  private post: Ref<IPost>;

  constructor() {
    this.posts = ref<Array<IPost>>([]);
    this.post = ref<IPost>({
      userId: 0,
      id: 0,
      title: '',
      body: ''
    });
  }

  getPosts(): Ref<Array<IPost>> {
    return this.posts;
  }

  getPost(): Ref<IPost> {
    return this.post;
  }

  async fetchAll(): Promise<void> {
    try {
      const URL = 'https://jsonplaceholder.typicode.com/posts';
      const response = await fetch(URL);
      const json = await response.json();
      this.posts.value = json;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchById(id: string): Promise<void> {
    try {
      const URL = 'https://jsonplaceholder.typicode.com/posts/' + id;
      const response = await fetch(URL);
      const json = await response.json();
      this.post.value = json;
    } catch (error) {
      console.error(error);
    }
  }
}

export default PostService;
