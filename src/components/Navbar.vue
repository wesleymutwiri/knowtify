<template>
  <nav>
    <div id="nav">
      <div class="logo">
        <h1>Knowtify</h1>
      </div>
      <div class="links">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <div v-if="!isAuthenticated">
        <a href="/signup">Sign Up</a>
      </div>
      <div v-else>
        <a href="#">{{ user.displayName }}</a>
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
.logo {
}
</style>

<script>
import { logout } from "../services/firebaseService";

export default {
  methods: {
    logout() {
      logout().then(() => {
        this.$store.commit("setUser", {});
      });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
    // isAuthenticated() {
    //   return this.$store.state.user.hasOwnProperty("id");
    // }
  }
};
</script>
