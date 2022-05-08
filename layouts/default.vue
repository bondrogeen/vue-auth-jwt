<template>
  <v-app>
    <AppDrawer v-model="drawer" />
    <AppHeader v-model="drawer" />
    <v-main>
      <Nuxt />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppDrawer from '@/components/app/drawer/AppDrawer';
import AppHeader from '@/components/app/header/AppHeader';
import AppFooter from '@/components/app/footer/AppFooter';
export default {
  name: 'DefaultLayout',
  components: {
    AppDrawer,
    AppHeader,
    AppFooter,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
