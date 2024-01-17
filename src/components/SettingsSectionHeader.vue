<template>
  <div class="p-4 border border-gray-200 rounded">
    <div class="flex flex-col gap-2">
      <span class="text-sm font-bold text-gray-700">{{ config.title }}</span>
      <p class="text-xs text-gray-500">{{ config.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsSectionHeader",
  props: {
    config: {
      type: Object,
      required: true,
    },
    keyName: {
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>

</style>
