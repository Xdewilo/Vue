<template>
    <div class="constiner">
        <transition-group name="list" tag="ul">
        <!-- The transition-group component will automatically apply classes for the enter and leave animations -->
            <li v-for="note in notes" :key="note"> <v-icon name="bi-file-earmark-font-fill" scale="2" animation="pulse" />{{ note }}</li>
        </transition-group>
        <input type="text" v-model="note" required>
        <button @click="addNote()">Save Note</button>
    </div>

</template>


<script lang="ts" setup>
import { ref } from 'vue'

const notes = ref<string[]>([])
const note = ref('')
const addNote = () => {
    notes.value.push(note.value)
    note.value = ''
}

</script>
<style scoped>
.constiner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}

/* Add a transition effect when adding or removing the element */
.list-enter-active, .list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from, .list-leave-to {
    opacity: 0;
    transform: translateX(50px);
}
</style>