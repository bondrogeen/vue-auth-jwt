<template>
  <div>
    <div class="d-flex align-center justify-space-between">
      <h1>Users</h1>
      <AppHeaderIcon size="small">
        <v-icon color="primary" size="20"> mdi-plus </v-icon>
      </AppHeaderIcon>
    </div>
    <a-card-block>
      <a-list v-slot="{ item }" :list="users">
        <AUsersList v-bind="item" :user="user" @click.native="onChange(item)" />
      </a-list>
    </a-card-block>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
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
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
    }),
  },
  methods: {
    onChange(item) {
      console.log(item);
    },
  },
};
</script>
