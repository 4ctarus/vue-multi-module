<template>
  <div
    class="expansion-panel rounded border border-gray-200 focus:border-white"
    :class="{ opened }"
  >
    <div class="expansion-panel-header px-4 py-3 bg-white">
      <h3 class="text-lg">{{ title }}</h3>

      <div class="expansion-panel-toggle">
        <ButtonIcon
          :icon="require('@/assets/icons/chevron-down.svg')"
          alt="toggle panel"
          @click="toggle"
        />
      </div>
    </div>
    <div
      class="expansion-panel-content"
      ref="content"
      :style="{ height: `${contentHeight}px` }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ButtonIcon from "./ButtonIcon.vue";

export default {
  name: "ExpansionPanel",
  components: {
    ButtonIcon,
  },
  props: {
    title: String,
  },
  data() {
    return {
      opened: false,
      contentHeight: 0,
    };
  },
  computed: {
    mainHeight() {
      return 200;
    },
  },
  methods: {
    toggle: function () {
      // console.log("opened", this.opened);
      this.contentHeight = this.opened ? 0 : this.$refs.content.scrollHeight;
      this.opened = !this.opened;
    },
  },
};
</script>

<style lang="scss" scoped>
.expansion-panel {
  .expansion-panel-header {
    display: grid;
    grid-column-gap: 16px;
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  .expansion-panel-toggle {
    transition: 200ms transform ease;
  }
  &.opened .expansion-panel-toggle {
    transform: rotate3d(0, 0, 1, -180deg);
  }

  .expansion-panel-content {
    height: 0px;
    overflow: hidden;
    transition: 200ms height ease;
  }
}
</style>