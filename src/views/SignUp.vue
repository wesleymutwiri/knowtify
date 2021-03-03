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
          v-model="email"
          placeholder="aa@gmail.com"
        />
        <input
          type="password"
          name="password"
          id=""
          v-model="password"
          placeholder="****"
        />
        <button class="sign-up" @click="signUp">Sign Up</button>
      </form>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert("Your account has been created Succesfully", user);
          },
          function(err) {
            alert("Something happened", err.message);
          }
        );
    }
  }
};
</script>
