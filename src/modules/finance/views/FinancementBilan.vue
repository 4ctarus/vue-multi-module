<template>
  <div class="financement-bilan flex flex-col p-4">
    <div class="m-2"><BilanTable /></div>
    <div class="m-2"><CompteTable /></div>
  </div>
</template>

<script>
import { BilanTable, CompteTable } from "../components";

export default {
  name: "FinancementBilan",
  components: {
    BilanTable,
    CompteTable,
  },
  computed: {},
};
</script>