<template>
  <div class="table">
    <!-- {{ bilan }} -->
    <c-form-control v-for="(row, index) in rows" :key="row.label">
      <c-form-label :for="index">{{ $t(row.label) }}</c-form-label>
      <!-- {{ row }} -->
      <c-input
        v-if="row.total"
        :id="index"
        type="number"
        placeholder="0"
        v-model.number="row.total"
        disabled
      />

      <c-input
        v-else
        :id="index"
        type="number"
        placeholder="0"
        v-model.number="row.value"
        @input="inputChange(row.label, row.value)"
      />
    </c-form-control>
  </div>
</template>

<script>
import { CFormControl, CFormLabel, CInput } from "@chakra-ui/vue";

export default {
  name: "DefaultTable",
  components: {
    CFormControl,
    CFormLabel,
    CInput,
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
    initStoreMethodName: {
      type: String,
      required: true,
    },
    updateStoreMethodName: {
      type: String,
      required: true,
    },
  },
  created() {
    // init bilan store
    console.log(this.initStoreMethodName, this.rows);
    this.$store.commit(
      this.initStoreMethodName,
      Object.fromEntries(
        this.rows
          .filter((row) => row.total == null)
          .map((row) => [[row.label], row.value])
      )
    );
  },
  methods: {
    inputChange(key, value) {
      this.$store.commit(this.updateStoreMethodName, { key, value });
    },
  },
};
</script>

<style>
</style>