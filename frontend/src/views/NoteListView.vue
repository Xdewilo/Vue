<template>
  <div class="container">
    <router-link :to="{name: 'create'}"><button class="btn btn-success">Create Note</button></router-link>
    <table class="table" v-if="notes">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="note in notes" :key="note.id">
          <th>{{ note.content }}</th>
        </tr>
      </tbody>
    </table>
    <p v-else> no data yet</p>
  </div>
</template>


<script lang="ts" setup>
import { onMounted, ref, Ref } from 'vue'
import useAuth from '@/store/auth'
import INote from '@/Interface/INote';


const store = useAuth()
const notes: Ref<Array<INote>> = ref([])
onMounted(async () => {
  notes.value = await store.getNotes()
})
</script>