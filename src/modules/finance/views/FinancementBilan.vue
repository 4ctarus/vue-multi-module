<template>
  <c-box display="grid" gridGap="2" gridAutoFlow="row dense" p="4">
    <ExpansionPanel :title="$t('bilan')"><BilanTable /> </ExpansionPanel>
    <ExpansionPanel :title="$t('compte')"><CompteTable /> </ExpansionPanel>
  </c-box>
</template>

<script>
import { CBox } from "@chakra-ui/vue";
import { ExpansionPanel } from "@/components";
import { BilanTable, CompteTable } from "../components";

export default {
  name: "FinancementBilan",
  components: {
    CBox,
    ExpansionPanel,
    BilanTable,
    CompteTable,
  },
  computed: {},
};
</script>

<i18n>
{
  "en": {
    "bilan": "Bilan",
    "compte": "Compte"
  }
}
</i18n>