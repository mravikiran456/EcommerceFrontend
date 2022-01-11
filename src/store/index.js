import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import Products from './Products'


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
        Products,
    },
    strict: process.env.DEBUGGING
  })

  return Store
})
