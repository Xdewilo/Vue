import {defineStore} from 'pinia'  
import {Usuario} from '../Interface/Usuario'  


const useAuth = defineStore('aunth', {
    state: () => {
        return {
            token : null,
            baseURL: 'http://127.0.0.1:8000/api'
        }
    },

    actions: {
        async login(name : string, email : string, password: string){

            const data = await fetch(`${this.baseURL}/auth/register`, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },

                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            const response = await data.json()
        },


        async register(email:string, password:string){
            const data = await fetch(`${this.baseURL}/auth/register`, {

                method: 'POST',

                headers: {

                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const response = await data.json()
        },
        async getNotes(){
            const data = await fetch(`${this.baseURL}/note`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            })
            const response = await data.json()
            return response

        },
        async createNotes(content: string){
            const data = await fetch(`${this.baseURL}/note`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Auntozation': `Bearer ${this.token}`
                },

                body: JSON.stringify({
                    content
                })
            })

            const response = await data.json()
            
        }
    }   
});


export default useAuth