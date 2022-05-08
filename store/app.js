export default {
  state: () => ({
    connection: true,
  }),
  mutations: {
    SET_CONNECTION(state, value) {
      state.connection = value;
    },
  },
  actions: {
    setConnection({ commit, state: { controller } }, value) {
      commit('SET_CONNECTION', value);
    },
  },
  getters: {
    getUpdate: ({ update }) => update,
  },
};
