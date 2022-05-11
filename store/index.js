
export default {
  strict: process.env.NODE_ENV !== 'production',
  state: () => ({}),
  mutations: {},
  actions: {
    async nuxtServerInit ({ state, dispatch }) { 
      await dispatch('content/get')
    },
  },
  getters: {}
}