<template>
  <v-row no-gutters class="page-auth">
    <v-col cols="12" md="5" class="px-4">
      <div class="page-auth__form">
        <VAuthForm />
      </div>
    </v-col>
    <v-col cols="12" md="7" class="d-none d-md-flex page-auth__right">
      <div>1</div>
    </v-col>
  </v-row>
</template>

<script>
import VAuthForm from '@/components/blocks/auth/VAuthForm';
export default {
  name: 'IndexPage',
  components: {
    VAuthForm,
  },
  layout: 'auth',
};
</script>

<style lang="scss">
.page-auth {
  height: 100%;
  &__header {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__logo {
    max-width: 350px;
  }
  &__form {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__right {
    background-color: map-get($primary, 'lighten-1');
  }
}
</style>