<template>
  <router-view></router-view>
</template>

<script>
import { store } from "./services";

export default {
  // name: "Presta",
  components: {},
  beforeMount() {
    this.$store.registerModule("presta", store);
  },
  beforeDestroy() {
    this.$store.unregisterModule("presta", store);
  },
};
</script>

<style>
</style>
