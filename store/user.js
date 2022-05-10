const resource = 'user';
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
      commit('SET_DATA', data);
      return data;
    },
    async getById({ commit }, { id, data }) {
      return await this.$api.get(`${resource}/${id}`, data);
    },
    async update({ commit }, { id, data }) {
      return await this.$api.put(`${resource}/${id}`, data);
    },
    async remove({ commit }, { id, data }) {
      return await this.$api.delete(`${resource}/${id}`, data);
    },
  },
  getters: {
    getData: ({ data }) => data || {},
  },
};
