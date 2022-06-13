<template>
  <div class="a-users-list d-sm-flex py-3" :class="{ 'a-users-list--active': active }">
    <div class="a-users-list__icon mr-2" @click="$emit('select', $event)">
      <a-checkbox v-if="selected" :value="selected" :checked="selected"></a-checkbox>
      <app-header-icon v-else size="small">
        <v-icon color="primary" size="20"> mdi-account-circle-outline </v-icon>
      </app-header-icon>
    </div>
    <div>
      <div class="a-users-list__title text-body-1">
        <span>
          <nuxt-link :to="`/users/${id}`">
            {{ fullName }}
          </nuxt-link>
        </span>
        <span v-if="isYou" class="green--text">You</span>
      </div>
      <div class="text-body-2 grey--text">
        <span>{{ email }}</span>
        <span class="grey--text">({{ getRole }}) </span>
      </div>
    </div>
    <v-spacer></v-spacer>
    <div class="align-self-end">
      <div class="text-sm-right text-caption mb-1">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageProfile',
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
    role: {
      type: Number,
      default: 0,
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
    roles: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    isYou() {
      return Boolean(this.user?.id === this.id);
    },
    getRole() {
      return this.roles
        .filter(i => i.value & this.role)
        .map(i => i.name)
        .join(',');
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
.a-users-list {
  position: relative;
  padding: 0 20px;
  &:hover {
    background-color: map-get($grey, 'lighten-1');
  }
  &__icon {
    flex: 0 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    cursor: pointer;
    font-weight: 700 !important;
  }
}
</style>
