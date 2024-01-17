<template>
  <button @click="resetToDefault" class="text-xs text-blue-500">Reset to Default</button>
</template>

<script>
export default {
  name: "SettingsResetButton",
  props: {
    config: {
      type: Object,
      required: true,
    },
    selectedValue: {
      type: [String, Array],
      required: true,
    },
    updateEvent: {
      type: Function,
      required: true,
    },
  },
  methods: {
    resetToDefault() {
      let newValue = this.config.default;
      this.updateEvent(newValue);
    },
  },
};
</script>