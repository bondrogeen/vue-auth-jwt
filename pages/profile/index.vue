<template>
  <div class="page-profile">
    <h1 class="mb-6">Profile</h1>
    <AProfileCard :user="user" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AProfileCard from '@/components/blocks/profile/AProfileCard';
export default {
  name: 'PageProfile',
  components: {
    AProfileCard,
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
    }),
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
