<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
// import { getLoggedInUser } from "@/services/firebaseService";
import firebase from "firebase";
// const app = firebase.initializeApp(process.env.config);
// const db = app.database();

// const notes = db.ref("notes");

export default {
  name: "app",
  components: {
    Navbar
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  // firebase: {
  //   notes: notes
  // }
};
</script>

<style scoped></style>
