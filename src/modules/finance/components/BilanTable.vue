<template>
  <div class="bilan-table">
    <!-- {{ bilan }} -->
    <c-form-control v-for="(row, index) in rows" :key="row.label">
      <c-form-label :for="index">{{ $t(row.label) }}</c-form-label>
      <!-- {{ row }} -->
      <c-input
        v-if="row.total"
        :id="index"
        type="number"
        :disabled="row.disabled"
        v-model.number="row.total"
      />

      <c-input
        v-else
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
import { mapState } from "vuex";
import { CFormControl, CFormLabel, CInput } from "@chakra-ui/vue";

export default {
  name: "BilanTable",
  components: {
    CFormControl,
    CFormLabel,
    CInput,
  },
  created() {
    // init bilan store
    this.$store.commit(
      "finance/initBilan",
      Object.fromEntries(this.rows.map((row) => [[row.label], row.value]))
    );
  },
  computed: {
    rows: {
      get() {
        return [
          {
            label: "vente_marchandise",
            type: "device",
            value: 12,
          },
          {
            label: "cout_achat_marchandise_vendue",
            type: "percent",
            total: this.coutAchatMarchandise,
            value: null,
          },
        ];
      },
    },

    coutAchatMarchandise: {
      get() {
        return this.bilan.vente_marchandise * 100;
      },
    },
    ...mapState({
      bilan: (state) => state.finance.bilan,
    }),
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