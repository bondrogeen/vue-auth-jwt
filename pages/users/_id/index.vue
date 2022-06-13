<template>
  <div class="page-profile">
    <h1 class="mb-6">Edit</h1>
    <AProfileCard :user="user" :auth="auth" :errors="errors" :messages="messages" @submit="onUpdate" @delete="onDelete" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AProfileCard from '@/components/blocks/profile/AProfileCard';
export default {
  name: 'PageProfile',
  components: {
    AProfileCard,
  },
  data: () => ({
    isLoading: false,
    errors: [],
    messages: [],
  }),
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('user/getById', { id: params.id });
    } catch (e) {
      error({ status: e?.response?.status || 444, messages: e?.response?.data || e?.toString() || {} });
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
      auth: 'auth/getUser',
    }),
  },
  methods: {
    ...mapActions('user', {
      update: 'update',
      delete: 'delete',
    }),
    onUpdate(e) {
      this.isLoading = true;
      this.update(e)
        .then(({ data }) => {
          if (data?.succes) this.$fetch();
        })
        .catch(e => {
          this.errors = e?.response?.data?.errors || [];
          this.messages = e?.response?.data?.messages || [];
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    onDelete(e) {
      this.isLoading = true;
      this.delete(e)
        .then(({ data }) => {
          if (data?.succes) this.$router.push('/users/');
        })
        .catch(e => {
          this.errors = e?.response?.data?.errors || [];
          this.messages = e?.response?.data?.messages || [];
        })
        .finally(() => {
          this.isLoading = false;
        });
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
