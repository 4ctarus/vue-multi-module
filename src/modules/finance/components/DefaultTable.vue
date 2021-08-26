<template>
  <div class="table">
    <c-grid
      class="table-row"
      template-columns="repeat(auto-fit, minmax(50px, 1fr))"
      alignItems="center"
      v-for="row in rows"
      :key="row.label"
    >
      <c-box as="span"> {{ $t(row.label) }}</c-box>

      <div class="table-input-container">
        <div class="table-input" v-if="row.total">{{ row.total }}</div>

        <c-input
          class="table-input"
          v-else
          type="number"
          placeholder="0"
          v-model.number="row.value"
          @input="inputChange(row.label, row.value)"
        />

        <div class="table-input-suffix" v-if="row.type !== RowType.DAY">
          {{ row.type === RowType.DEVICE ? "€" : "%" }}
        </div>
      </div>
    </c-grid>
  </div>
</template>

<script>
import { CBox, CGrid, CInput } from "@chakra-ui/vue";

export const RowType = {
  DEVICE: "device",
  PERCENT: "percent",
  DAY: "day",
};

export default {
  name: "DefaultTable",
  components: {
    CBox,
    CGrid,
    CInput,
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
    initStoreMethodName: {
      type: String,
      required: true,
    },
    updateStoreMethodName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      RowType,
    };
  },
  created() {
    // init bilan store
    console.log(this.initStoreMethodName, this.rows);
    this.$store.commit(
      this.initStoreMethodName,
      Object.fromEntries(
        this.rows
          .filter((row) => row.total == null)
          .map((row) => [[row.label], row.value])
      )
    );
  },
  methods: {
    inputChange(key, value) {
      this.$store.commit(this.updateStoreMethodName, { key, value });
    },
  },
};
</script>

<style lang="scss" scoped>
.table-input-container {
  position: relative;
  height: 40px;

  & > .table-input {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    padding-right: 24px;
  }

  .table-input-suffix {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>