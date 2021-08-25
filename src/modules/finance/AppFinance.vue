<template>
  <router-view></router-view>
</template>

<script>
import i18n from "../../i18n";
import commonMessage from "./assets/en.json";
import { store } from "./services";

export default {
  name: "AppFinance",
  components: {},
  beforeMount() {
    i18n.setLocaleMessage("en", commonMessage);
    this.$store.registerModule("finance", store);
  },
  beforeDestroy() {
    this.$store.unregisterModule("finance", store);
  },
};
</script>

<style>
</style>
