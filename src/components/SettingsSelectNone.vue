<template>
  <div class="settings-item">
      <span class="settings-title">{{ config.title }}</span>
      <p class="settings-description">{{ config.description }}</p>
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