<template>
  <div class="container">
    <div class="form-image">
      <img src="" alt="" />
    </div>
    <div class="form">
      <h1>Login</h1>
      <form v-on:submit.prevent>
        <input
          type="email"
          name="email"
          id=""
          v-model="user.email"
          placeholder="aa@gmail.com"
        />
        <input
          type="password"
          name="password"
          id=""
          v-model="user.password"
          placeholder="***"
        />
        <v-btn class="login" @click="login" v-if="!isLoading">Login</v-btn>
        <v-btn type="button" v-else disabled>Loading...</v-btn>
        <v-btn @click="loginWithGoogle">Google auth</v-btn>
      </form>
    </div>
    <router-link to="/signup">Signup</router-link>
  </div>
</template>
<script>
import { login } from "../services/firebaseService";
import firebase from "firebase";
import { mapMutations } from "vuex";

export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      isLoading: false
    };
  },
  methods: {
    ...mapMutations(["setUser"]),
    async login() {
      this.isLoading = true;
      login(this.user.email, this.user.password)
        .then(user => {
          this.setUser(user);
          this.isLoading = false;
        })
        .then(() => {
          this.$router.push("/");
        });
    },
    loginWithGoogle() {
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(user => {
          this.setUser(user);
          this.isLoading = false;
        })
        .then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>

<style scoped>
input {
  border: 1px solid #ddd;
  padding: 1rem;
}
</style>
