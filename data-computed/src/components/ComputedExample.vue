<template >
  <div>
    <input type="text"  v-model="msg"/>
    <h2>{{ msg }}</h2>
    <h3>{{ reverse }}</h3>
  </div>
</template>


<!--<script lang="ts">
        //OPTION API
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'ComputedExample',
    data() {
        return {
            msg : ''
        }
    },
    computed: {
        reverse() : string{
            return this.msg.split(' ').reverse().join(' ')
        }
    }
})

</script>-->

<!--<script lang="ts">
//              Composicion API
import { defineComponent, ref, Ref, computed } from 'vue'
export default defineComponent({
    name: 'ComputedExample',
    setup(){
        let msg : Ref<string>= ref('')
        const reverse = computed(() => msg.value.split('').reverse().join(''))
        return {msg, reverse}
    }
})
</script>
<style scoped>
-->



<script lang="ts" setup>
//              Composicion API (setup)
import { ref, Ref, computed } from 'vue'
    let msg : Ref<string>= ref('')
    const reverse = computed(() => msg.value.split('').reverse().join(''))
</script>

<style scoped>
  
</style>