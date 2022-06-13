<template>
  <div class="a-dialog">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title v-if="message" class="text-h5 grey lighten-2"> {{ title }} </v-card-title>
        <v-card-text>
          {{ message }}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> {{ btnText }} </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      getDialog: 'app/getDialog',
      getDialogData: 'app/getDialogData',
    }),
    dialog: {
      set(value) {
        this.setDialog(value);
      },
      get() {
        return this.getDialog;
      },
    },
    title() {
      return this.getDialogData?.title || '';
    },
    message() {
      return this.getDialogData?.message || '';
    },
    btnText() {
      return this.getDialogData?.btnText || 'OK';
    },
  },
  methods: {
    ...mapActions({
      setDialog: 'app/setDialog',
    }),
  },
};
</script>
