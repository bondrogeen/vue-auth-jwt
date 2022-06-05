<template>
  <div>
    <h1 class="mb-6">Users</h1>
    <ABlockUsers v-bind="{ users, roles, user }" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ABlockUsers from '@/components/blocks/users/ABlockUsers';
export default {
  name: 'PageUsers',
  components: {
    ABlockUsers,
  },
  data: () => ({
    current: {},
  }),
  async fetch({ store, error }) {
    try {
      await store.dispatch('user/get');
    } catch (e) {
      error({ status: e?.response?.status || 444, messages: e?.response?.data || e?.toString() || {} });
    }
  },
  computed: {
    ...mapGetters({
      data: 'user/getData',
      user: 'auth/getUser',
      content: 'content/getData',
    }),
    roles() {
      return this.content?.roles || [];
    },
    users() {
      return this.data?.users || [];
    },
  },
  methods: {
    onChange(item) {
      this.current = item;
    },
  },
};
</script>

<style lang="scss">
.page-profile {
  &__menu {
    margin-top: 48px;
    gap: 20px;
  }
}
</style>
