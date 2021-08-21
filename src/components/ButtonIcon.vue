<template>
  <button
    class="flex justify-center items-center rounded-full h-10 w-10"
    @click="$emit('click')"
  >
    <img class="h-6 w-6" :src="icon" :alt="alt" />
  </button>
</template>

<script>
export default {
  name: "ButtonIcon",
  props: {
    icon: String,
    alt: String,
  },
};
</script>

<style>
</style>