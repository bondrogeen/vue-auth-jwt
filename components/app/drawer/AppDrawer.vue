<template>
  <client-only>
    <v-navigation-drawer v-model="drawer" :width="$vuetify.breakpoint.mdAndUp ? '50%' : '100%'" disable-route-watcher fixed temporary app>
      <v-list>
        <!-- <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
  </client-only>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    drawer: {
      set(value) {
        this.$emit('input', value);
      },
      get() {
        return this.value;
      },
    },
  },
};
</script>
