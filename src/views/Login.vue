<template>
  <div class="container">
    <div class="form-image">
      <img src="" alt="" />
    </div>
    <div class="form">
      <h1>Login</h1>
      <form v-on:submit.prevent>
        <input type="email" name="email" id="" v-model="user.email" />
        <input type="password" name="password" id="" v-model="user.password" />
        <button class="login" @click="login" v-if="!isLoading">Login</button>
        <button type="button" v-else disabled>Loading...</button>
      </form>
    </div>
  </div>
</template>
<script>
import { login } from "../services/firebaseService";

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
    async login() {
      this.isLoading = true;
      login(this.user.email, this.user.password)
        .then(user => {
          this.$store.commit("setUser", user);
          this.isLoading = false;
        })
        .then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>
