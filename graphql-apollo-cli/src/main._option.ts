import { createApp, provide, h } from 'vue'
import App from './App.vue'
import {ApolloClient,createHttpLink,InMemoryCache} from '@apollo/client/core'
import {createApolloProvider} from '@vue/apollo-option'
import router from './router';

// import { DefaultApolloClient } from '@vue/apollo-composable'
const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql'
});


// Create the apollo client
const cache = new InMemoryCache();


// Create the apollo client
const apolloClient = new ApolloClient({
    // Provide the apollo client to the app
    link: httpLink,
    cache
});

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
    cliente2 : apolloClient2
    cliente : apolloClient3
});
// Create a new app
createApp({
    render: () => h(App)
}).use(apolloProvider).use(router).mount('#app')
