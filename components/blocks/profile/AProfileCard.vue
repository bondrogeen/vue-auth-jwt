<template>
  <div class="a-profile-card">
    <a-card-block>
      <div class="a-profile-card__body">
        <v-form ref="form" v-model="valid">
          <div class="d-flex">
            <div class="a-profile-card__prev mr-4" @click="$router.back()">
              <v-icon color="grey" size="20"> mdi-keyboard-return </v-icon>
            </div>
            <div class="text-subtitle-1 mb-3">Personal information</div>
          </div>
          <div class="text-body-1 grey--text mb-2">Avatar</div>
          <div class="d-flex align-center mb-6">
            <v-avatar class="mr-4" size="80" tile>
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
              <!-- <v-icon v-else color="primary" size="20"> mdi-plus </v-icon> -->
            </v-avatar>
          </div>

          <v-row>
            <v-col cols="12">
              <div class="text-body-1 grey--text mb-2">Info</div>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.firstName" :rules="getRules('firstName')" label="First name *" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.lastName" :rules="getRules('lastName')" label="Last name" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.email" :rules="getRules('email')" :disabled="!create" label="Email *" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.phone" :rules="getRules('phone')" label="Phone number" outlined></v-text-field>
            </v-col>
            <v-col cols="12">
              <div class="text-body-1 grey--text mb-2">Security</div>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.password" :rules="getRules('password')" type="password" label="Password" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.confirmPassword" :rules="getRules('confirmPassword')" type="password" label="Confirm password" outlined></v-text-field>
            </v-col>
          </v-row>
          <div v-if="isMessage" class="v-auth-form__message text-body-2 red--text">
            <p v-for="(message, i) of messages" :key="`msg_${message}_${i}`">{{ message }}</p>
          </div>
        </v-form>
      </div>

      <template #footer>
        <div class="d-flex">
          <v-btn v-if="!create && !isYou " large outlined color="red" @click="onDelete">Delete</v-btn>
          <v-spacer></v-spacer>
          <v-btn :disabled="isValid" large color="primary" @click="onSubmit">{{ create ? 'Create' : 'Save changes' }}</v-btn>
        </div>
      </template>
    </a-card-block>
  </div>
</template>

<script>
import { required, email, same, min } from '@/utils/validation';
export default {
  props: {
    auth: {
      type: Object,
      default: () => ({}),
    },
    user: {
      type: Object,
      default: () => ({}),
    },
    messages: {
      type: Array,
      default: () => [],
    },
    errors: {
      type: Array,
      default: () => [],
    },
    create: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    valid: true,
    default: {},
    form: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      image: '',
    },
    list: [
      { title: 'Account', subtitle: 'Personal information', icon: 'mdi-account-circle', component: 'ABlockAcount' },
      { title: 'Address', subtitle: 'Shippings addresses', icon: 'mdi-map-marker-outline', component: 'ABlockAddress' },
      { title: 'Payment method', subtitle: 'Connected credit cards', icon: 'mdi-credit-card-outline', component: 'ABlockPay' },
      { title: 'Security', subtitle: 'Password, 2FA', icon: 'mdi-shield-lock-outline', component: 'ABlockSecurity' },
    ],
  }),
  computed: {
    isValid() {
      if (this.create) return !this.valid;
      else return Boolean(JSON.stringify(this.default) === JSON.stringify(this.form));
    },
    isMessage() {
      return Boolean(this.messages?.length);
    },
    isYou() {
      return Boolean(this.auth?.id === this.user?.id);
    },
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      const { firstName, lastName, email, phone } = this.user;
      this.default = { firstName, lastName, email, phone };
      this.form = { firstName, lastName, email, phone };
      this.$refs.form.resetValidation();
    },
    getRules(field) {
      if (field === 'firstName') return [required(), min(2)];
      if (field === 'email') return [required(), email()];
      if (field === 'password') return [required(), min(6)];
      if (field === 'confirmPassword') return [required(), same(this.form.password)];
    },
    getError(param) {
      return this.errors.filter(i => i.param === param).map(i => i.msg);
    },
    onSubmit(item) {
      if (this.create) this.$emit('submit', this.form);
      else this.$emit('submit', { id: this.user.id, data: this.form });
    },
    onDelete() {
      this.$emit('delete', { id: this.user.id });
    },
  },
};
</script>
<style lang="scss">
.a-profile-card {
  position: relative;
  &__prev {
    cursor: pointer;
  }
}
</style>
