<template>
  <div class="home">
    <h1>Client home</h1>
    <p>globalStateValue : {{ globalStateValue }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    globalStateValue() {
      return this.$store.state.globalStateValue;
    },
  },
};
</script>