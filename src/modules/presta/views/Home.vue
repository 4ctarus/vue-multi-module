<template>
  <div class="home">
    <h1>Presta home</h1>
    <p>globalStateValue : {{ globalStateValue }}</p>
    <p>moduleStateValue : {{ moduleStateValue }}</p>

    <button @click="update">update</button>
  </div>
</template>

<script>
export default {
  computed: {
    globalStateValue() {
      return this.$store.state.globalStateValue;
    },
    moduleStateValue() {
      return this.$store.state.presta.moduleStateValue;
    },
  },
  methods: {
    update() {
      console.log(this.$store);
      this.$store.commit("presta/update");
    },
  },
};

// TODO: update state value, and check if the value is reset on module change
</script>