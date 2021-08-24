<template>
  <c-box
    class="expansion-panel"
    :class="{ opened }"
    border-width="1px"
    rounded="lg"
    overflow="hidden"
  >
    <c-box
      class="expansion-panel-header"
      display="grid"
      gridGap="2"
      gridTemplateColumns="1fr auto"
      alignItems="center"
      pl="4"
      pr="2"
      py="2"
      font-weight="bold"
    >
      <h3 class="text-lg">{{ title }}</h3>

      <c-box
        class="expansion-panel-toggle"
        transition="300ms transform ease"
        :transform="!opened ? '' : 'rotate3d(0, 0, 1, -180deg)'"
      >
        <ButtonIcon
          :icon="require('@/assets/icons/chevron-down.svg')"
          alt="toggle panel"
          @click="toggle"
        />
      </c-box>
    </c-box>

    <transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div class="expansion-panel-content" v-if="opened">
        <c-box p="4">
          <slot></slot>
        </c-box>
      </div>
    </transition>
  </c-box>
</template>

<script>
import { CBox } from "@chakra-ui/vue";
import ButtonIcon from "./ButtonIcon.vue";

export default {
  name: "ExpansionPanel",
  components: {
    CBox,
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