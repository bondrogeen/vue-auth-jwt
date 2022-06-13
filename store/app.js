export default {
  state: () => ({
    dialog: true,
    dialogData: {},
  }),
  mutations: {
    SET_DIALOG(state, value) {
      state.dialog = value;
    },
    SET_DIALOG_DATA(state, value) {
      state.dialogData = value;
    },
  },
  actions: {
    setMessage({ commit }, data) {
      commit('SET_DIALOG_DATA', data);
      commit('SET_DIALOG', true);
    },
    setDialog({ commit }, value) {
      commit('SET_DIALOG', value);
    },
  },
  getters: {
    getDialog: ({ dialog }) => dialog,
    getDialogData: ({ dialogData }) => dialogData,
  },
};
