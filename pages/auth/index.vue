<template>
  <v-row no-gutters class="page-auth">
    <v-col cols="12" md="5" class="px-4">
      <div class="page-auth__form">
        <VAuthForm :loading="loading" :messages="messages" :errors="errors" @clear="onClear" @submit="onSubmit" />
      </div>
    </v-col>
    <v-col cols="12" md="7" class="d-none d-md-flex page-auth__right">
      <div></div>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
import VAuthForm from '@/components/blocks/auth/VAuthForm';
export default {
  name: 'IndexPage',
  auth: false,
  components: {
    VAuthForm,
  },
  layout: 'auth',
  middleware: ['loggedIn'],
  data: () => ({
    errors: [],
    messages: [],
    loading: false,
  }),
  methods: {
    ...mapActions('auth', ['login', 'restore']),
    onClear(param) {
      this.errors = this.errors.filter(i => i.param !== param);
      if (!param) {
        this.onClearAll();
      }
    },
    onClearAll() {
      this.errors = [];
      this.messages = [];
    },
    onSubmit({ data, type }) {
      this.loading = true;
      this.onClearAll();
      this[type](data)
        .then(res => {
          console.log(res);
          if (res?.data?.accessToken) this.$router.push('/');
        })
        .catch(e => {
          this.errors = e?.response?.data?.errors || [];
          this.messages = e?.response?.data?.messages || [];
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
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
