<template>
  <header class="header">
    <v-container>
      <div class="d-flex align-center">
        <div class="header__logo text-h3">
          <a-link to="/"> Vue <span class="primary--text">auth JWT</span> </a-link>
        </div>
        <v-spacer></v-spacer>
        <div class="header__btn">
          <app-header-icon badge="1">
            <v-icon color="primary"> mdi-bell-outline </v-icon>
          </app-header-icon>
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <app-header-icon v-bind="attrs" v-on="on">
                <v-avatar size="45" tile>
                  <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </v-avatar>
              </app-header-icon>
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in menuProfile" :key="i">
                <v-list-item-icon class="mr-2">
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  <a-link :to="item.link">
                    {{ item.name }}
                  </a-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click.prevent="onLogout">
                <v-list-item-icon class="mr-2">
                  <v-icon>mdi-exit-to-app</v-icon>
                </v-list-item-icon>
                <v-list-item-title> Logout </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-container>
  </header>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
    // menu: [
    //   { name: 'Setting', link: '/setting' },
    //   { name: 'Users', link: '/users' },
    // ],
    menuProfile: [{ name: 'Profile', icon: 'mdi-account-circle', link: '/profile' }],
  }),
  methods: {
    ...mapActions({
      onLogout: 'auth/logout',
    }),
  },
};
</script>

<style lang="scss">
.header {
  position: relative;
  background-color: $white;
  &__btn {
    display: flex;
    gap: 10px;
  }
  &__item {
    padding: 0 20px;
    border-left: 1px solid map-get($grey, 'lighten-1');
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
