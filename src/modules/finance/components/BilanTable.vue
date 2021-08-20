<template>
  <div class="bilan-table">
    <h1>Bilan table</h1>

    <ul id="example-2">
      <li v-for="(row, index) in rows" :key="row">
        {{ index }} - {{ $t(`${row}.label`) }}
        <span v-if="$t(`${row}.type`) === 'device'">$</span>
      </li>
    </ul>
  </div>
</template>

<script>
const rows = ["vente_marchandise", "cout_achat_marchandise_vendue"];

export default {
  data() {
    return {
      rows,
    };
  },
};
</script>

<style>
</style>

<i18n>
{
  "en": {
    "vente_marchandise": {
        "label": "Vente de marchandise",
        "type": "device",
        "editable": true
    },
    "cout_achat_marchandise_vendue": {
        "label": "(Cout d'achat des marchandises vendues)",
        "type": "device",
        "editable": true
    }
  }
}
</i18n>