<template>
  <div @click="$emit('click')">
    <c-flex
      as="button"
      align="center"
      justify="center"
      w="10"
      h="10"
      borderRadius="50%"
    >
      <img w="6" h="6" :src="icon" :alt="alt" />
    </c-flex>
  </div>
</template>

<script>
import { CFlex } from "@chakra-ui/vue";

export default {
  name: "ButtonIcon",
  components: {
    CFlex,
  },
  props: {
    icon: String,
    alt: String,
  },
};
</script>

<style>
</style>