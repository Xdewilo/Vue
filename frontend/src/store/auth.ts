import {defineStore} from 'pinia'  // Import the defineStore function from the pinia package

// Define a new store called useAuth
const useAuth = defineStore('aunth', {
    state: () => {
        return {
            token : null,
            baseURL: 'http://127.0.0.1:8000/api'
        }
    },
    // Define the actions property
    actions: {
        async login(email : string, password: string){

            const data = await fetch(`${this.baseURL}/auth/login`, {
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
            if(response.status == false ){
                this.token = null
                return false
            }else{
                this.token = response.token
                return true
            }
        },


        async register(name:string, email:string, password:string){
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
            if(response.status === false){
                return false
            }else{
                this.token = response.token
                return true
            }
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
            if(response.status === false){
                return false
            }else{
                return true
            }
            
        }
    }   
});


export default useAuth