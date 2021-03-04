<template>
  <div class="home">
    <Sidebar />
    some content
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  data() {
    return {};
  },
  components: {
    Sidebar
  }
};
</script>

<style scoped>
.home {
  display: flex;
  min-height: 100vh;
}
</style>
