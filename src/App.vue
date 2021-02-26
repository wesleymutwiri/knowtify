<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Firebase from "firebase";
import Navbar from "@/components/Navbar";
const app = Firebase.initializeApp(process.env.config);
const db = app.database();

const notes = db.ref("notes");

import Sidebar from "@/components/Sidebar";
export default {
  name: "app",
  components: {
    Navbar,
    Sidebar
  },
  firebase: {
    notes: notes
  }
};
</script>

<style scoped></style>
