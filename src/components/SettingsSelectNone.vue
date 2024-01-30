<template>
  <div class="settings-item">
    <div class="flex flex-col gap-2">
      <span class="settings-title">{{ config.title }}</span>
      <p class="settings-description">{{ config.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsSelectNone",
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