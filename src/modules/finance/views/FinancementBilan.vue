<template>
  <div class="financement-bilan">
    <BilanTable />
    <CompteTable />
  </div>
</template>

<script>
import { BilanTable, CompteTable } from "../components";

export default {
  components: {
    BilanTable,
    CompteTable,
  },
  computed: {},
};
</script>