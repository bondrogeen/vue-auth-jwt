<template>
  <v-container class="page-profile">
    <v-row>
      <v-col cols="12" md="4" class="page-profile__menu">
        <template v-for="(item, i) of list">
          <AProfileList v-bind="item" :key="`list_${i}`" :active="isActive(item)" @click.native="onChange(item)" />
        </template>
      </v-col>
      <v-col cols="12" md="8">
        <component :is="component" :user="user"></component>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import AProfileList from '@/components/blocks/profile/AProfileList';
export default {
  name: 'PageProfile',
  components: {
    AProfileList,
    ABlockAcount: () => import('@/components/blocks/profile/ABlockAcount'),
    ABlockAddress: () => import('@/components/blocks/profile/ABlockAddress'),
    ABlockPay: () => import('@/components/blocks/profile/ABlockPay'),
    ABlockSecurity: () => import('@/components/blocks/profile/ABlockSecurity'),
  },
  data: () => ({
    current: {},
    list: [
      { title: 'Account', subtitle: 'Personal information', icon: 'mdi-account-circle', component: 'ABlockAcount' },
      { title: 'Address', subtitle: 'Shippings addresses', icon: 'mdi-map-marker-outline', component: 'ABlockAddress' },
      { title: 'Payment method', subtitle: 'Connected credit cards', icon: 'mdi-credit-card-outline', component: 'ABlockPay' },
      { title: 'Security', subtitle: 'Password, 2FA', icon: 'mdi-shield-lock-outline', component: 'ABlockSecurity' },
    ],
  }),
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
    }),
    component() {
      return this.current?.component || this.list[0].component;
    },
  },
  methods: {
    isActive({ component }) {
      return Boolean(this.component === component);
    },
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
