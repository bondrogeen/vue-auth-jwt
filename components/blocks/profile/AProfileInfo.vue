<template>
  <a-card-block class="a-profile-info">
    <div class="d-flex">
      <div class="mr-2">
        <app-header-icon size="small">
          <v-icon color="primary" size="20"> mdi-account-circle </v-icon>
        </app-header-icon>
      </div>
      <div>
        <div class="a-profile-list__title text-body-1">{{ fullname }}</div>
        <div class="text-body-2 grey--text">{{ email }}</div>
      </div>
    </div>
  </a-card-block>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      default: '',
    },
    lastName: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fullname() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};
</script>

<style lang="scss">
.a-profile-info {
  position: relative;
  &__title {
    font-weight: 700 !important;
  }
}
</style>
