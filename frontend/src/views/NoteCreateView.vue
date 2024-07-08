<template>
    <div class="container">
        <form>
            <div class="from-group">
                <label for="exampleInputEmail1" class="form-label">my note</label>
                <input type="email" class="form-control" id="exampleInputEmail1" v-model="note" aria-describedby="emailHelp">
            </div>
            <button type="submit" class="btn btn-primary"  @click.prevent="sendNote">Submit</button>

            <router-link :to="{ name: 'list' }"><button class="btn btn-danger">back list</button></router-link>
        </form>
        <p>{{ message }}</p>
    </div>
</template>

<script lant="ts" setup>
import router from '@/router';
import useAuth from '@/store/auth';
import { ref } from 'vue'


const store = useAuth()
const note = ref('')
const message = ref('')

const sendNote = async() =>{
    const data = await store.createNotes(note.value)
    if(data == false){
        message.value = 'Failed'
    }else{
        router.push({ name: 'list' })
    }
}

</script>
