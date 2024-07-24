import { defineStore } from "pinia";

export const useExample = defineStore('useExample', {
    state: () => {
        return {
            count: 0
        }
    },
    actions: {
        init(){
            const contador = localStorage.getItem('count')
            if(contador){
                this.count = parseInt(contador)
            }
        },
        increment(value = 1) {
            this.count += value
            localStorage.setItem('count', this.count.toString())
        }
    },
    persist: {
        storage: sessionStorage, // use sessionStorage as the storage
        paths: ['count'] // only save the count
    }  
})