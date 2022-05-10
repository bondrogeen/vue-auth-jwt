<template>
  <v-row no-gutters class="page-auth">
    <v-col cols="12" md="5" class="px-4">
      <div class="page-auth__form">
        <VRegistrationForm :loading="loading" :messages="messages" :errors="errors" @clear="onClear" @submit="onSubmit" />
      </div>
    </v-col>
    <v-col cols="12" md="7" class="d-none d-md-flex page-auth__right">
      <div></div>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
import VRegistrationForm from '@/components/blocks/auth/VRegistrationForm';
export default {
  name: 'IndexPage',
  auth: false,
  components: {
    VRegistrationForm,
  },
  layout: 'auth',
  middleware: ['loggedIn'],
  data: () => ({
    errors: [],
    messages: [],
    loading: false,
  }),
  methods: {
    ...mapActions('auth', ['register']),
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
    onSubmit({ data }) {
      this.loading = true;
      this.onClearAll();
      this.register(data)
        .then(res => {
          if (res?.data?.succes) this.$router.push('/auth/');
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
