<template>
  <v-row>
    <v-col cols="12" md="4">

    </v-col>
    <v-col cols="12" md="8">
      {{ data }}
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageIndex',
  components: {},
  data: () => ({}),
  async fetch({ store, error }) {
    try {
      await store.dispatch('user/get');
    } catch (e) {
      error({ status: e?.response?.status || 444, messages: e?.response?.data || e?.toString() || {} });
    }
  },
  computed: {
    ...mapGetters({
      data: 'user/getData',
    }),
  },
};
</script>
