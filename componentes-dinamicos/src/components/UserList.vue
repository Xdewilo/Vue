<template >
  <div class="constiner">
    <li>
        <ul>
            <li>nombre : {{ data.content.name }}</li>
            <li>edad : {{ data.content.age }}</li>
            <li>cargo : {{ data.content.position }}</li>
        </ul>
    </li>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'


const data = defineProps(['content'])



</script>
<style scoped>

.container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    margin-bottom: 10px;
}
li {
    display: block;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
li:last-child {
    border-bottom: none;
}
li:hover {
    background-color: #f4f4f4;
}

  
</style>