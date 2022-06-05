<template>
  <div class="app-menu">
    <AProfileInfo v-bind="user" class="mb-2"/>
    <v-list dense nav class="app-menu__list">
      <v-list-item v-for="item in menu" :key="item.title" link :to="item.path">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AProfileInfo from '@/components/blocks/profile/AProfileInfo';
export default {
  components: {
    AProfileInfo,
  },
  data: () => ({
    menu: [
      { title: 'Users', path: '/users', icon: 'mdi-view-dashboard' },
      { title: 'Settings', path: '/settings', icon: 'mdi-view-dashboard' },
      { title: 'Profile', path: '/profile', icon: 'mdi-image' },
      { title: 'About', path: '/about', icon: 'mdi-help-box' },
    ],
  }),
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
    }),
  },
};
</script>

<style lang="scss">
.app-menu {
  position: relative;
  // max-width: 300px;
  &__list {
    border-radius: 16px !important;
    // background-color: map-get($primary, 'lighten-1') !important;
  }
}
</style>
