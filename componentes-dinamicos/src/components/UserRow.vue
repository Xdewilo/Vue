<template>
    <div class="container">
        <table>

            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ data.content.name }}</td>
                    <td>{{ data.content.age }}</td>
                    <td>{{ data.content.position }}</td>
                </tr>

            </tbody>

        </table>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

const data = defineProps(['content'])
</script>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

table {
    width: 80%;
    border-collapse: collapse;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    background-color: #fff;
}

th,
td {
    padding: 15px;
    text-align: left;
}

thead {
    background-color: #009879;
    color: #ffffff;
    text-transform: uppercase;
}

tbody tr {
    border-bottom: 1px solid #dddddd;
}

tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

tbody tr:hover {
    background-color: #f1f1f1;
    cursor: pointer;
}
</style>