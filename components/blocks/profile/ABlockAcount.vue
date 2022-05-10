<template>
  <div>
    <h1>Account</h1>
    <a-card-block>
      <div class="text-subtitle-1 mb-3">Personal information</div>
      <div class="text-body-1 grey--text mb-2">Avatar</div>
      <div class="d-flex align-center mb-6">
        <v-avatar class="mr-4" size="80" tile>
          <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
        </v-avatar>
        <v-btn class="mr-4" large outlined color="primary">Change</v-btn>
        <v-btn text large color="grey">Remove</v-btn>
      </div>
      <v-row class="mb-4">
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
      </v-row>
      <!-- <div class="text-subtitle-1 mb-3">Email notifications</div> -->
      <v-divider class="mb-4"></v-divider>
      <div class="d-flex">
        <v-btn class="mr-4" large outlined color="red" @click="onLogout">Log out</v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="isChange" large color="primary">Save changes</v-btn>
      </div>
    </a-card-block>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    form: {
      firstName: '',
      email: '',
    },
  }),
  computed: {
    isChange() {
      return JSON.stringify(this.form) === JSON.stringify(this.initForm);
    },
  },
  mounted() {
    const { firstName, lastName, email, phone } = this.user;
    this.form = { firstName, lastName, email, phone };
    this.initForm = { firstName, lastName, email, phone };
  },
  methods: {
    ...mapActions({
      onLogout: 'auth/logout',
    }),
  },
};
</script>
