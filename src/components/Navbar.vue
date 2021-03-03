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
