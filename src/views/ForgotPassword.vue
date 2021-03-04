<template>
  <v-card>
    <v-card-title>Forgot Password</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field type="email" v-model="user.email"></v-text-field>
        <v-btn @click="submit">Reset Password</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {
        email: ""
      }
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert("check your email to reset the password");
          this.user = {
            email: ""
          };
          this.$router.push("/login");
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>
