<template>
  <nav>
    <div id="nav">
      <div class="logo">
        <h1>Knowtify</h1>
      </div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <v-btn @click="logout">Logout</v-btn>
      <div v-if="!isAuthenticated">
        <a href="/signup">Sign Up</a>
      </div>
      <div v-else>
        <a href="#">{{ user.displayName }}</a>
        <a href="#">{{ user.email }}</a>
      </div>
    </div>
  </nav>
</template>
<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
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
