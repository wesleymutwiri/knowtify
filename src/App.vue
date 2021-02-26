<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style scoped></style>
