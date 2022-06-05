<template>
  <v-form ref="form" v-model="valid" class="v-auth-form">
    <h2 class="text-h2 text-lg-h1 mb-3">{{ forgot ? 'Reset your password' : 'Login' }}</h2>
    <div class="text-body-2 grey--text mb-6">Sign in with your data that you entered during your registration.</div>
    <div v-if="isMessage" class="v-auth-form__message text-body-2 red--text">
      <p v-for="(message, i) of messages" :key="`msg_${message}_${i}`">{{ message }}</p>
    </div>
    <v-text-field v-model="form.email" class="mb-2" outlined label="Email" required :rules="getRules('email')" />
    <v-text-field v-if="!forgot" v-model="form.password" class="mb-2" type="password" outlined label="Password" required :rules="getRules('password')" @keypress.enter="onSubmit" />
    <div class="mb-6">
      <v-btn color="primary" :disabled="!valid" :loading="loading" block @click="onSubmit"> {{ forgot ? 'Send password reset email' : 'Login' }} </v-btn>
    </div>
    <div class="mb-6">
      <v-btn color="primary" block text plain @click="onForgot"> {{ forgot ? 'Login' : 'Forgot password' }} </v-btn>
    </div>
    <div class="text-body-2 text-center">
      Don’t have an account?
      <a-link to="/registration" class="primary--text"> Sign up </a-link>
    </div>
  </v-form>
</template>

<script>
import { required, email } from '@/utils/validation';
export default {
  layout: 'auth',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: Array,
      default: () => [],
    },
    messages: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    forgot: false,
    valid: true,
    form: {
      name: '',
      email: '',
      password: '',
    },
  }),
  computed: {
    isMessage() {
      return Boolean(this.messages?.length);
    },
  },
  methods: {
    getRules(field) {
      if (field === 'email') return [required(), email()];
      if (field === 'password') return [required()];
    },
    getError(param) {
      return this.errors.filter(i => i.param === param).map(i => i.msg);
    },
    clearError(param) {
      this.$emit('clear', param);
    },
    onSubmit() {
      this.$emit('submit', { type: this.forgot ? 'restore' : 'login', data: this.form });
    },
    onForgot() {
      this.$emit('clear', null);
      this.$refs.form.reset()
      this.forgot = !this.forgot;
    },
  },
};
</script>

<style lang="scss">
.v-auth-form {
  max-width: 350px;
  &__message {
    padding: 20px 10px;
    background-color: map-get($red, 'lighten-1');
    border: 1px solid map-get($red, 'base');
    border-radius: 4px;
    margin-bottom: 30px;
    p:last-child {
      margin: 0;
    }
  }
}
</style>
