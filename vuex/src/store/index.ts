import { createStore } from 'vuex'

export default createStore({

  // state is a single object that contains all the shared data in the application.
  state: {
    //Data
    counter: 0
  },

  // getters are functions that return a value from the store.
  getters: {
    // Computed
    getTwo(state){
      return state.counter * 2
    }
  },

  // mutations are functions that effect the state.
  mutations: {
    // Set sync
    setCounter(state,value){
      state.counter = value
    }
  },

  // actions are functions that causes side effects and can involve asynchronous operations.
  actions: {  
    // Set async
   
  },
  // modules are used to divide the store into multiple modules.
  modules: {
    // subdivide the store into multiple modules.

  }
})
