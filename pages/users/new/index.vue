<template>
  <div class="page-profile">
    <h1 class="mb-6">Create</h1>
    <AProfileCard create :user="user" :errors="errors" :messages="messages" @submit="onCreate" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AProfileCard from '@/components/blocks/profile/AProfileCard';
export default {
  name: 'PageProfile',
  components: {
    AProfileCard,
  },
  data: () => ({
    isLoading: false,
    user: {},
    errors: [],
    messages: [],
  }),
  methods: {
    ...mapActions('user', {
      create: 'create',
    }),
    onCreate(e) {
      this.isLoading = true;
      this.create(e)
        .then(({ succes }) => {
          if (succes) this.$router.push('/users/');
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
