import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { firestorePlugin } from "vuefire";
import firebase from "firebase";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyDo2Co51ezdg-W0rtnKTmD6h9Q6RwBrpNc",
  authDomain: "knowtify-io.firebaseapp.com",
  databaseURL:
    "https://knowtify-io-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "knowtify-io",
  storageBucket: "knowtify-io.appspot.com",
  messagingSenderId: "408114689085",
  appId: "1:408114689085:web:f070a770106e57e1b9e654",
  measurementId: "G-626SYTFZ0W"
};

firebase.initializeApp(config);

Vue.use(firestorePlugin);

const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
  new Vue({
    el: "#app",
    router,
    store,
    vuetify,
    render: h => h(App),
    created() {
      if (firebaseUser) {
        store.dispatch("fetchUserProfile", firebaseUser);
      }
    }
  });
  unsubscribe();
});
