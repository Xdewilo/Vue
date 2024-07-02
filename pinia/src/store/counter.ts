import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter',{
    state: () => ({
        count: 1
    }),
    getters: {
        time2: (state) => state.count * 2
    },
    actions:{
        incremet(){
            this.count++
        }
    }
})
