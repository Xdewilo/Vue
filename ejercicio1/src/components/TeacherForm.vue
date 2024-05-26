<template>
    <section>
        <div><label>Nombre:</label> <input type="text" v-model="teacher.teacherName"></div>
        <div><label>Apellido:</label> <input type="text" v-model="teacher.teacherLastName"></div>
        <div><label>DNI:</label> <input type="text" v-model="teacher.dni"></div>
        <div><label>Materias:</label> <input type="text" v-model="subject"><button @click="handleSubject()"> Agregar</button></div>
        <div>
            <ul>
                <li v-for="(materia , index) in teacher.subjects" :key="index">{{ materia }}</li>
            </ul>
        
        </div>
        <input type="checkbox" v-model="teacher.doc">Documentacion entregada
        <button @click="handleAddTeacher()"> Agregar</button>
    </section>

    <section>
    <h3>Listado de profesores</h3>
    <table>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>apellido</th>
            <th>DNI</th>
            <th>Materias</th>
            <th>Documentacion estado</th>
        </tr>
        <tbody>
            <tr v-for="(teach , index) in teachers" :key="index">
                <th>{{ teach.teacherName }}</th>
                <th>{{ teach.teacherLastName }}</th>
                <th>{{ teach.dni }}</th>
                <th>
                    <ul>
                        <li v-for="(item, index) in teach.subjects" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </th>
                <th v-if="teach.doc">Entregado</th>
                <th v-else>No entregado</th>
            </tr>
        </tbody>
    
    </thead>
    
    
    </table>
    </section>
</template>

<script lang="ts" setup>

import { ref, Ref } from 'vue'

interface ITeacher {
    teacherName: string,
    teacherLastName: string,
    dni: string,
    subjects: string[],
    doc: boolean
}

let teacher: Ref<ITeacher> = ref({
    teacherName: "",
    teacherLastName: "",
    dni: "",
    subjects: [],
    doc: false
})

let teachers: Ref<Array<ITeacher>> = ref([])

let subject: Ref<string> = ref('')

const handleSubject = () => {
    teacher.value.subjects.push(subject.value)
    subject.value = ""
}

const handleAddTeacher = () => {
    teachers.value.push({
        teacherName: teacher.value.teacherName,
        teacherLastName: teacher.value.teacherLastName,
        dni: teacher.value.dni,
        subjects: teacher.value.subjects,
        doc: teacher.value.doc
    })
    teacher.value.teacherName = ""
    teacher.value.teacherLastName = ""
    teacher.value.dni = ""
    teacher.value.subjects = []
    teacher.value.doc = false
}

</script>

<style scope></style>