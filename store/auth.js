import { getRoles } from '@/utils/helpers';
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
      return await this.$api.post(`${resource}/register`, data);
    },
    async restore({ commit }, data) {
      try {
        return await this.$api.post(`${resource}/restore`, data);
      } catch (error) {}
    },
  },
  getters: {
    getUser: (state, getters, rootState) => {
      const user = rootState?.authentication?.user || {};
      const roles = rootState?.content?.data?.roles || [];
      return { ...user, ...getRoles(roles, user?.role || 0) };
    },
  },
};
