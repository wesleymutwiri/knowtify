<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Firebase from "firebase";
import Navbar from "@/components/Navbar";
const app = Firebase.initializeApp(process.env.config);
const db = app.database();

const notes = db.ref("notes");

export default {
  name: "app",
  components: {
    Navbar
  },
  firebase: {
    notes: notes
  }
};
</script>
