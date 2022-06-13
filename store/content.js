const resource = 'content';
export default {
  state: () => ({
    data: {},
  }),
  mutations: {
    SET_DATA(state, value) {
      state.data = value;
    },
  },
  actions: {
    async get({ commit }) {
      const { data } = await this.$api.get(`${resource}`);
      commit('SET_DATA', data || {});
      return data;
    },
  },
  getters: {
    getData: ({ data }) => data,
  },
};
