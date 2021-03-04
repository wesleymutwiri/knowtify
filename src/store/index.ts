import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";
import user from "@/store/modules/user";
// import SecureLS from "secure-ls";
// const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { user },
  plugins: [
    // createPersistedState({
    //   storage: {
    //     getItem: key => ls.get(key),
    //     setItem: (key, value) => ls.set(key, value),
    //     removeItem: key => ls.remove(key)
    //   }
    // })
  ]
});
