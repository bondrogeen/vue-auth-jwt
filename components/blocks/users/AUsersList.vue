<template>
  <div class="a-profile-list d-sm-flex py-3" :class="{ 'a-profile-list--active': active }">
    <div class="mr-2">
      <AppHeaderIcon size="small">
        <v-icon color="primary" size="20"> mdi-account-circle-outline </v-icon>
      </AppHeaderIcon>
    </div>
    <div>
      <div class="a-profile-list__title text-body-1">
        <span>{{ fullName }}</span>
        <span v-if="isYou" class="green--text">You</span>
      </div>
      <div class="text-body-2 grey--text">
        <span>{{ email }}</span>
        <span class="grey--text">({{ role }}) </span>
      </div>
    </div>
    <v-spacer></v-spacer>
    <div>
      <div class="text-sm-right text-caption mb-1">{{ date }}</div>
      <div v-if="isEdit" class="text-sm-right">
        <v-icon color="grey" size="18"> mdi-pencil-outline </v-icon>
        <v-icon v-if="!isYou" color="grey" size="18"> mdi-trash-can-outline </v-icon>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderIcon from '@/components/app/header/AppHeaderIcon';
export default {
  name: 'PageProfile',
  components: {
    AppHeaderIcon,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
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
    roles: {
      type: Array,
      default: () => [],
    },
    icon: {
      type: String,
      default: '',
    },
    updatedAt: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    role() {
      return this.roles?.[0]?.value || '';
    },
    isEdit() {
      const roles = (this.user?.roles || []).map(i => i.value);
      return Boolean(roles.includes('admin'));
    },
    isYou() {
      return Boolean(this.user?.id === this.id);
    },
    date() {
      const date = new Date(this.updatedAt);
      return date.toLocaleString(['ru-RU'], {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    },
  },
};
</script>

<style lang="scss">
.a-profile-list {
  position: relative;
  &__title {
    font-weight: 700 !important;
  }
}
</style>
