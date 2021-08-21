<template>
  <div
    class="expansion-panel rounded border border-gray-200 focus:border-white"
  >
    <header class="p-4">
      <h3 class="text-lg">{{ title }}</h3>
    </header>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
</style>