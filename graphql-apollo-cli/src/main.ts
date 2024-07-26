import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {ApolloClient,createHttpLink,InMemoryCache} from '@apollo/client/core'

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql'

});
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});

createApp(App).use(router).mount('#app')
