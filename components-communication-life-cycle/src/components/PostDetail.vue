<template >

  <div class="card">
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
  </div>

</template>


<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'PostDetail',
    props: {
        title : {
            type: String,
            required: true,
            default : 'no tiene titulo'
        },
        content :{
            type : String,
            required : false,
            default : "no tiene contenido"
        }
    },
    setup(props){
        return {props}
    }
})
</script>


<style scoped>
  .card{
    width: 500px;
    height: 100px;
    background-color: blue;
    color: antiquewhite;
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
  }
</style>