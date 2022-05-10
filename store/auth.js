const resource = 'auth';
export default {
  actions: {
    async login({ commit }, data) {
      return await this.$auth.loginWith('local', { data });
    },
    async logout() {
      return await this.$auth.logout();
    },
    async register({ commit }, data) {
      try {
        return await this.$api.post(`${resource}/register`, data);
      } catch (error) {}
    },
    async restore({ commit }, data) {
      try {
        return await this.$api.post(`${resource}/restore`, data);
      } catch (error) {}
    },
  },
  getters: {
    getUser: (state, getters, rootState) => rootState?.authentication?.user || {},
  },
};
