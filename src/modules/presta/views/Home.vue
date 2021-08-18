<template>
  <div class="home">
    <h1>Presta home</h1>
    <p>globalStateValue : {{ globalStateValue }}</p>
    <p>moduleStateValue : {{ moduleStateValue }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    globalStateValue() {
      console.log(this.$store);
      return this.$store.getters.globalStateValue;
    },
    moduleStateValue() {
      return this.$store.state.moduleStateValue;
    },
  },
};

// TODO: update state value, and check if the value is reset on module change
</script>