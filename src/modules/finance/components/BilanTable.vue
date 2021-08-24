<template>
  <div class="bilan-table">
    <c-form-control v-for="(row, index) in rows" :key="row.label">
      <c-form-label :for="index">{{ $t(row.label) }}</c-form-label>
      {{ row }}
      <c-input
        :id="index"
        type="number"
        :disabled="row.disabled"
        v-model.number="row.value"
        @change="inputChange(row.label, row.value)"
      />
    </c-form-control>
  </div>
</template>

<script>
import { CFormControl, CFormLabel, CInput } from "@chakra-ui/vue";

const rows = [
  {
    label: "vente_marchandise",
    type: "device",
    disabled: false,
    value: 12,
  },
  {
    label: "cout_achat_marchandise_vendue",
    type: "percent",
    disabled: true,
    value: null,
  },
];

export default {
  name: "BilanTable",
  components: {
    CFormControl,
    CFormLabel,
    CInput,
  },
  beforeMount() {
    // init bilan store
    this.$store.commit(
      "finance/initBilan",
      Object.fromEntries(rows.map((row) => [[row.label], row.value]))
    );
  },
  created() {
    // try with watch,
    // watch rows value to
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "updateStatus") {
        console.log(`Updating to ${state.bilan}`);
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
  data() {
    return {
      rows,
    };
  },
  methods: {
    inputChange(key, value) {
      this.$store.commit("finance/updateBilan", { key, value });
    },
  },
};
</script>

<style>
</style>

<i18n>
{
  "en": {
    "vente_marchandise": "Vente de marchandise",
    "cout_achat_marchandise_vendue": "(Cout d'achat des marchandises vendues)"
  }
}
</i18n>