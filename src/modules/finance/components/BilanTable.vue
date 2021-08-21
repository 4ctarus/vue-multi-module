<template>
  <div class="bilan-table">
    <ExpansionPanel v-bind:title="$t('title')" />

    <ul id="example-2">
      <li v-for="(row, index) in rows" :key="row.label">
        {{ index }} - {{ $t(row.label) }}
        <span v-if="row.type === 'device'">$</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ExpansionPanel } from "@/components";

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
  components: {
    ExpansionPanel,
  },
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
    "title": "Bilan",
    "vente_marchandise": "Vente de marchandise",
    "cout_achat_marchandise_vendue": "(Cout d'achat des marchandises vendues)"
  }
}
</i18n>