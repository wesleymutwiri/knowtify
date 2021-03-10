<template>
  <v-app-bar flat>
    <v-toolbar-title>
      <div class="logo">
        <h1>Knowtify</h1>
      </div>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <v-spacer></v-spacer>
    <div v-if="!isAuthenticated">
      <a href="/signup">Sign Up</a>
    </div>
    <div v-else>
      <v-btn>{{ user.displayName }}</v-btn>
      <v-btn>{{ user.email }}</v-btn>
      <v-btn @click="logout">Logout</v-btn>
    </div>
  </v-app-bar>
</template>
<style scoped>
.links * {
  padding: 1rem;
}

header {
  margin-bottom: 1rem;
}
</style>

<script>
import { mapGetters } from "vuex";
import { logout } from "../services/firebaseService";

export default {
  methods: {
    logout() {
      logout().then(() => {
        this.$store.commit("setUser", {});
        location.reload();
      });
    }
  },
  computed: {
    ...mapGetters(["getUser"]),
    user() {
      return this.getUser;
    },
    isAuthenticated() {
      return Object.prototype.hasOwnProperty.call(this.user, "uid");
    }
  }
};
</script>
