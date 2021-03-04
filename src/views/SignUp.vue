<template>
  <div class="container">
    <div class="form-image">
      <img src="" alt="" />
    </div>
    <div class="form">
      <h1>Sign Up</h1>
      <form v-on:submit.prevent>
        <v-text-field
          type="email"
          name="email"
          id=""
          v-model="user.email"
          label="Email"
          placeholder="aa@gmail.com"
        ></v-text-field>
        <v-text-field
          type="text"
          name="username"
          id=""
          label="username"
          v-model="user.username"
          placeholder="bigBoy"
        ></v-text-field>

        <v-text-field
          type="password"
          name="password"
          id=""
          label="password"
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
