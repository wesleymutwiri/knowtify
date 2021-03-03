<template>
  <div class="container">
    <div class="form">
      <div class="sign-in-social">
        <div class="google social"></div>
        <div class="facebook social">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <path
              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            ></path>
          </svg>
          <div class="display-none">Sign up with Facebook</div>
        </div>
        <div class="github social">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
          <div class="display-none">Sign up with Github</div>
        </div>
      </div>
      <div class="input-container">
        <input type="email" name="email" id="" placeholder="aa@gmail.com" />
      </div>
      <div class="input-container">
        <input type="password" name="password" id="" placeholder="*****" />
      </div>
    </div>
    <div class="background">
      <img src="img/cool-background.jpeg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 80vh;
  box-sizing: border-box;
}
input {
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
}

.sign-in-social {
  display: flex;
  justify-content: center;
}

.display-none {
  display: none;
}
.social {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.social:hover > .display-none {
  display: unset;
}
.background {
  width: 50%;
}
img {
  width: 100%;
  height: 100%;
}
.form {
  width: 50%;
}
</style>
