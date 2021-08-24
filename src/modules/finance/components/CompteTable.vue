<template>
  <div class="compte-table">
    <c-form-control v-for="(row, index) in rows" :key="row.label">
      <c-form-label :for="index">{{ $t(row.label) }}</c-form-label>
      {{ row }}
      <c-input
        :id="index"
        v-model.number="row.value"
        type="number"
        :disabled="row.disabled"
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
    value: null,
  },
  {
    label: "cout_achat_marchandise_vendue",
    type: "percent",
    disabled: true,
    value: null,
  },
];

export default {
  name: "CompteTable",
  components: {
    CFormControl,
    CFormLabel,
    CInput,
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
    "vente_marchandise": "Vente de marchandise",
    "cout_achat_marchandise_vendue": "(Cout d'achat des marchandises vendues)"
  }
}
</i18n>