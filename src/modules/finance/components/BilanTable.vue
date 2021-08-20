<template>
  <div class="bilan-table">
    <h1>Bilan table</h1>

    <ul id="example-2">
      <li v-for="(row, index) in rows" :key="row">
        {{ index }} - {{ $t(row.label) }}
        <span v-if="row.type === 'device'">$</span>
      </li>
    </ul>
  </div>
</template>

<script>
const rows = [
  {
    label: "vente_marchandise",
    type: "device",
    editable: true,
  },
  {
    label: "cout_achat_marchandise_vendue",
    type: "percent",
    editable: true,
  },
];

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
    "vente_marchandise": "Vente de marchandise",
    "cout_achat_marchandise_vendue": "(Cout d'achat des marchandises vendues)"
  }
}
</i18n>