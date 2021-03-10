<template>
  <div class="layout-default">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <slot />
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style scoped>
.layout-default {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
.main-content {
  width: 100%;
  margin-left: 10px;
}
</style>
