// Importing necessary modules from Vue
import { ref, Ref } from 'vue';

// AuthService class definition
class AuthService {
    // Defining private reactive properties for JWT and error message
    private jwt: Ref<string>;
    private error: Ref<string>;

    // Constructor initializes the reactive properties
    constructor() {
        this.jwt = ref(''); // JWT token
        this.error = ref(''); // Error message
    }

    // Getter method to access the JWT token
    getJwt(): Ref<string> {
        return this.jwt;
    }

    // Getter method to access the error message
    getError(): Ref<string> {
        return this.error;
    }

    // Async login method to authenticate the user
    async login(email: string, password: string): Promise<boolean> {
        try {
            // Making a POST request to the authentication endpoint
            const URL = await fetch('https://hfp69ilv.directus.app/auth/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json', // Accept header
                    'Content-Type': 'application/json' // Content-Type header
                },
                body: JSON.stringify({
                    email: email, // Email from the input
                    password: password // Password from the input
                })
            });

            // Parsing the response to JSON
            const response = await URL.json();

            // Checking if the response contains errors
            if ('errors' in response) {
                this.error.value = 'login error'; // Setting the error message
                return false; // Login failed
            }

            // Setting the JWT token from the response data
            this.jwt.value = response.data.access_token;
            return true; // Login successful

        } catch (e) {
            // Handling any errors that occur during the fetch request
            this.error.value = 'login error'; // Setting the error message
            return false; // Login failed
        }
    }
}

// Exporting the AuthService class as default
export default AuthService;
