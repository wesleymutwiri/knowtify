<template>
  <div class="container">
    <div class="form-image">
      <img src="" alt="" />
    </div>
    <div class="form">
      <h1>Sign Up</h1>
      <form v-on:submit.prevent>
        <input
          type="email"
          name="email"
          id=""
          v-model="user.email"
          placeholder="aa@gmail.com"
        />
        <input
          type="text"
          name="username"
          id=""
          v-model="user.username"
          placeholder="bigBoy"
        />

        <input
          type="password"
          name="password"
          id=""
          v-model="user.password"
          placeholder="****"
        />
        <v-btn class="sign-up" @click="signUp">Sign Up</v-btn>
      </form>
    </div>
    <router-link to="/login">Login</router-link>
  </div>
</template>
<script>
import { register } from "../services/firebaseService";

export default {
  name: "signup",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    signUp() {
      register(this.user.username, this.user.email, this.user.password)
        .then(user => {
          this.$store.commit("setUser", user);
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
