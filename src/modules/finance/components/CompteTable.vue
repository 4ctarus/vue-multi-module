<template>
  <div class="compte-table">
    <default-table
      :rows="rows"
      :initStoreMethodName="init"
      :updateStoreMethodName="update"
    ></default-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DefaultTable from "./DefaultTable.vue";

export default {
  name: "CompteTable",
  components: {
    DefaultTable,
  },
  data() {
    return {
      init: "finance/initCompte",
      update: "finance/updateCompte",
    };
  },
  computed: {
    rows: {
      get() {
        return [
          {
            label: "ca",
            type: "device",
            value: 12,
          },
          {
            label: "charges_fixes",
            type: "percent",
            total: this.chargesFixes,
            value: null,
          },
        ];
      },
    },

    chargesFixes: {
      get() {
        return this.bilan.vente_marchandise * this.compte.ca;
      },
    },
    ...mapState({
      bilan: (state) => state.finance.bilan,
      compte: (state) => state.finance.compte,
    }),
  },
};
</script>

<style>
</style>