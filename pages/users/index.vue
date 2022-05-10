<template>
  <v-container class="page-users">
    <v-row>
      <v-col cols="12" md="4" class="page-users__menu">1 </v-col>
      <v-col cols="12" md="8">
        <ABlockUsers :users="users" />
      </v-col>
    </v-row>
  </v-container>
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
    }),
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
