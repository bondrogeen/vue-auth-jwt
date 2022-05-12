<template>
  <div class="a-block-users">
    <div class="d-flex align-center">
      <h1>Users</h1>
      <v-spacer></v-spacer>
      <AppHeaderIcon size="small">
        <v-icon color="primary" size="20"> mdi-plus </v-icon>
      </AppHeaderIcon>
      <AppHeaderIcon v-if="selected.length" class="ml-2" size="small">
        <v-icon color="red" size="20"> mdi-delete </v-icon>
      </AppHeaderIcon>
    </div>
    <a-card-block class="pa-0 overflow-hidden">
      <a-list v-slot="{ item }" class="a-block-users__list" :list="users">
        <AUsersList v-bind="{ ...item, user, roles }" :selected="isSelected(item)" @select="onSelect(item)" />
      </a-list>
    </a-card-block>
  </div>
</template>
<script>
import AUsersList from '@/components/blocks/users/AUsersList';
import AppHeaderIcon from '@/components/app/header/AppHeaderIcon';
export default {
  components: {
    AUsersList,
    AppHeaderIcon,
  },
  props: {
    users: {
      type: Array,
      default: () => [],
    },
    user: {
      type: Object,
      default: () => ({}),
    },
    roles: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    selected: [],
  }),
  computed: {},
  methods: {
    onSelect({ id }) {
      if (this.selected.includes(id)) {
        this.selected = this.selected.filter(i => i !== id);
      } else {
        this.selected.push(id);
      }
    },
    isSelected({ id }) {
      return this.selected.includes(id);
    },
  },
};
</script>

<style lang="scss">
.a-block-users {
  position: relative;
  &__list {
    li:not(:last-child) {
      border-bottom: 1px solid map-get($grey, 'lighten-1');
    }
  }
}
</style>
