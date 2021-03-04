export default {
  state: {
    user: {},
    notesList: [],
    note: {}
  },
  getters: {
    getUser: (state: any) => state.user
  },
  mutations: {
    setUser(state: any, val: object) {
      state.user = val;
    }
  }
};
