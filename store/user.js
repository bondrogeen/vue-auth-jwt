const resource = 'user';
export default {
  state: () => ({
    content: {},
  }),
  mutations: {
    SET_CONTENT(state, value) {
      state.content = value;
    },
  },
  actions: {
    async login({ commit }, data) {
      console.log(data);
      return await this.$auth.loginWith('local', { data });
    },
    async logout() {
      return await this.$auth.logout();
    },
    async register({ commit }, data) {
      try {
        return await this.$api.post('auth/register', { data });
      } catch (error) {}
    },
    async restore({ commit }, data) {
      try {
        return await this.$api.post('auth/register', data);
      } catch (error) {}
    },
    async get({ commit }, data) {
      return await this.$api.get(`${resource}`, data);
    },
    async getById({ commit }, { id, data }) {
      return await this.$api.get(`${resource}/${id}`, data);
    },
    async update({ commit }, { id, data }) {
      console.log({ id, data });
      return await this.$api.put(`${resource}/${id}`, data);
    },
    async remove({ commit }, { id, data }) {
      return await this.$api.delete(`${resource}/${id}`, data);
    },
  },
  getters: {
    getContent: ({ content }) => content || {},
  },
};
