import { ref, Ref } from 'vue'

class AuthService {
    private jwt: Ref<string>;
    private error: Ref<string>;

    constructor() {
        this.jwt = ref('');
        this.error = ref('');
    }


    getJwt(): Ref<string> {
        return this.jwt;
    }

    getError() : Ref<string>{
        return this.error;
    }

    async login(email: string, password: string): Promise<boolean> {

        try {
            const URL = await fetch('https://hfp69ilv.directus.app/auth/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password

                })
            });

            const respose = await URL.json();

            if ('errors' in respose) {
                this.error.value = 'login error';
                return false;
                }
                
            this.jwt.value = respose.data.access_token;
            return true;

        } 
        catch (e) {
            this.error.value = 'login error';
            return false;
        }
    }
}
export default AuthService; 