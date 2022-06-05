<template>
  <v-app class="layout-def">
    <AppDrawer v-model="drawer" />
    <AppHeader v-model="drawer" />
    <v-main class="">
      <v-container class="page-main">
        <v-row>
          <v-col cols="12" md="3" class="d-none d-md-block">
            <AppMenu class="layout-def__menu"/>
          </v-col>
          <v-col cols="12" md="9" lg="8" offset-lg="1">
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppDrawer from '@/components/app/drawer/AppDrawer';
import AppHeader from '@/components/app/header/AppHeader';
import AppFooter from '@/components/app/footer/AppFooter';
import AppMenu from '@/components/app/menu/AppMenu';
export default {
  name: 'DefaultLayout',
  components: {
    AppDrawer,
    AppHeader,
    AppFooter,
    AppMenu,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>

<style lang="scss">
.layout-def {
  background-color: map-get($primary, 'lighten-2') !important;
  &__menu {
    margin-top: 78px;
  }
}
</style>
