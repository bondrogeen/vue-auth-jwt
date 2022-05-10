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
          <v-text-field label="First name" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Last name" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Email" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Phone number" outlined></v-text-field>
        </v-col>
      </v-row>
      <!-- <div class="text-subtitle-1 mb-3">Email notifications</div> -->
      <v-divider class="mb-4"></v-divider>
      <div class="d-flex">
        <v-btn class="mr-4" large outlined color="red">Log out</v-btn>
        <v-spacer></v-spacer>
        <v-btn class="mr-4" large outlined color="grey">Discard changes</v-btn>
        <v-btn large color="primary">Save changes</v-btn>
      </div>
    </a-card-block>
  </div>
</template>
