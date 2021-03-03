<template>
  <div class="container">
    <div class="form-image">
      <img src="" alt="" />
    </div>
    <div class="form">
      <h1>Login</h1>
      <form v-on:submit.prevent>
        <input type="email" name="email" id="" v-model="email" />
        <input type="password" name="password" id="" v-model="password" />
        <button class="login" @click="login">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          alert("Successfully logged in", userCredential);
          this.$router.replace("/");
        })
        .catch(error => {
          alert("Something happened", error);
        });
    }
  }
};
</script>
