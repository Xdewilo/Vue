import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import {ApolloClient,createHttpLink,InMemoryCache} from '@apollo/client/core'
import { DefaultApolloClient} from '@vue/apollo-composable'
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

// Create a new app
createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient);
    },
    render: () => h(App)
}).use(router).mount('#app')
