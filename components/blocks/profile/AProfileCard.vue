<template>
  <div class="a-profile-card">
    <a-card-block>
      <div class="a-profile-card__body">
        <div class="text-subtitle-1 mb-3">Personal information</div>
        <div class="text-body-1 grey--text mb-2">Avatar</div>
        <div class="d-flex align-center mb-6">
          <v-avatar class="mr-4" size="80" tile>
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
          <v-btn class="mr-4" large outlined color="primary">Change</v-btn>
          <v-btn text large color="grey">Remove</v-btn>
        </div>
        <v-row>
          <v-col cols="12">
            <div class="text-body-1 grey--text mb-2">Info</div>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="form.firstName" label="First name" outlined></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="form.lastName" label="Last name" outlined></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="form.email" disabled label="Email" outlined></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="form.phone" label="Phone number" outlined></v-text-field>
          </v-col>
          <v-col cols="12">
            <div class="text-body-1 grey--text mb-2">Security</div>
          </v-col>
          <v-divider></v-divider>
          <v-col cols="12" md="6">
            <v-text-field v-model="form.password" label="Password" outlined></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="form.confirmPassword" label="Confirm password" outlined></v-text-field>
          </v-col>
        </v-row>
      </div>

      <template #footer>
        <div class="d-flex">
          <v-btn large outlined color="red">Delete</v-btn>
          <v-spacer></v-spacer>
          <v-btn :disabled="isChange" large color="primary">Save changes</v-btn>
        </div>
      </template>
    </a-card-block>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    current: {},
    form: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    list: [
      { title: 'Account', subtitle: 'Personal information', icon: 'mdi-account-circle', component: 'ABlockAcount' },
      { title: 'Address', subtitle: 'Shippings addresses', icon: 'mdi-map-marker-outline', component: 'ABlockAddress' },
      { title: 'Payment method', subtitle: 'Connected credit cards', icon: 'mdi-credit-card-outline', component: 'ABlockPay' },
      { title: 'Security', subtitle: 'Password, 2FA', icon: 'mdi-shield-lock-outline', component: 'ABlockSecurity' },
    ],
  }),
  computed: {
    isChange() {
      return Boolean(JSON.stringify(this.user) === JSON.stringify(this.form));
    },
  },
  mounted() {
    const { firstName, lastName, email, phone } = this.user;
    this.form = { firstName, lastName, email, phone };
  },
  watch: {
    user(e) {
      console.log(e);
    },
  },
  methods: {
    onChange(item) {
      this.current = item;
    },
  },
};
</script>
<style lang="scss">
.a-profile-card {
  position: relative;
}
</style>
