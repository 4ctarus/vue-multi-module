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
    <transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div class="expansion-panel-content" v-if="opened">
        <slot></slot>
      </div>
    </transition>

    <!-- <div
      class="expansion-panel-content"
      ref="content"
      :style="{ height: `${contentHeight}px` }"
    >
      <slot></slot>
    </div> -->
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
    };
  },
  methods: {
    enter(element) {
      const width = getComputedStyle(element).width;

      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      // Trigger the animation.
      // We use `requestAnimationFrame` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
    leave(element) {
      const height = getComputedStyle(element).height;

      element.style.height = height;

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    },
    toggle: function () {
      // console.log("opened", this.opened);
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
    transition: 300ms transform ease;
  }
  &.opened .expansion-panel-toggle {
    transform: rotate3d(0, 0, 1, -180deg);
  }

  .expansion-panel-content {
    overflow: hidden;
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: height 300ms ease-in-out, opacity 300ms ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
  opacity: 0;
}
</style>