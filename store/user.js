const resource = 'user';
export default {
  state: () => ({
    data: {},
    user: {},
  }),
  mutations: {
    SET_DATA(state, value) {
      state.data = value;
    },
    SET_USER(state, value) {
      state.user = value;
    },
  },
  actions: {
    async create({ commit }, payload) {
      const { data } = await this.$api.post(`${resource}`, payload);
      commit('SET_DATA', data);
      return data;
    },
    async get({ commit }) {
      const { data } = await this.$api.get(`${resource}`);
      commit('SET_DATA', data);
      return data;
    },
    async getById({ commit }, { id }) {
      const { data } = await this.$api.get(`${resource}/${id}`);
      commit('SET_USER', data);
      return data;
    },
    async update({ commit }, { id, data }) {
      return await this.$api.put(`${resource}/${id}`, data);
    },
    async delete({ commit }, { id }) {
      return await this.$api.delete(`${resource}/${id}`);
    },
  },
  getters: {
    getData: ({ data }) => data || {},
    getUser: ({ user }) => user || {},
  },
};
