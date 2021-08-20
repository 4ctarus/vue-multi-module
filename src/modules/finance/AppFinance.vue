<template>
  <router-view></router-view>
</template>

<script>
import { store } from "./services";

export default {
  // name: "AppFinance",
  components: {},
  beforeMount() {
    this.$store.registerModule("finance", store);
  },
  beforeDestroy() {
    this.$store.unregisterModule("finance", store);
  },
};
</script>

<style>
</style>
