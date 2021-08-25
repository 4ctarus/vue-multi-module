<template>
  <div class="bilan-table">
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
      init: "finance/initBilan",
      update: "finance/updateBilan",
    };
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
};
</script>

<style>
</style>