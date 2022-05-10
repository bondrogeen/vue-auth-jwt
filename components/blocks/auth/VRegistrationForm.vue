<template>
  <v-form ref="form" v-model="valid" class="v-auth-form">
    <h2 class="text-h1 mb-3">Sing up</h2>
    <div class="text-body-2 grey--text mb-6">Sign in with your data that you entered during your registration.</div>
    <div v-if="isMessage" class="v-auth-form__message text-body-2 red--text">
      <p v-for="(message, i) of messages" :key="`msg_${message}_${i}`">{{ message }}</p>
    </div>
    <v-text-field v-model="form.firstName" class="mb-2" :rules="getRules('firstName')" outlined label="First name" required />
    <v-text-field v-model="form.email" class="mb-2" :rules="getRules('email')" outlined label="Email" required />
    <v-text-field v-model="form.password" class="mb-2" type="password" :rules="getRules('password')" outlined label="Password" required />
    <v-text-field v-model="form.confirmPassword" class="mb-2" type="password" outlined label="Confirm password" required :rules="getRules('confirmPassword')" />
    <div class="mb-6">
      <v-btn color="primary" :disabled="!valid" :loading="loading" block @click="onSubmit"> Register </v-btn>
    </div>
    <div class="text-body-2 text-center">
      Do you have an account?
      <a-link to="/auth" class="primary--text"> Sign in </a-link>
    </div>
  </v-form>
</template>

<script>
import { required, email, same, min } from '@/utils/validation';
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
      firstName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  }),
  computed: {
    isMessage() {
      return Boolean(this.messages?.length);
    },
  },
  methods: {
    getRules(field) {
      if (field === 'firstName') return [required(), min(2)];
      if (field === 'email') return [required(), email()];
      if (field === 'password') return [required(), min(6)];
      if (field === 'confirmPassword') return [required(), same(this.form.password)];
    },
    getError(param) {
      return this.errors.filter(i => i.param === param).map(i => i.msg);
    },
    clearError(param) {
      this.$emit('clear', param);
    },
    onSubmit() {
      this.$emit('submit', { data: this.form });
    },
    onForgot() {
      this.$emit('clear', null);
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
