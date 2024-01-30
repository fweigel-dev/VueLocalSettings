<template>
  <button @click="resetToDefault" class="settings-reset">Reset to Default</button>
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
      type: [String, Array, Number],
      required: true,
    },
    updateEvent: {
      type: Function,
      required: true,
    },
  },
  methods: {
    resetToDefault() {
      let newValue = Array.isArray(this.config.default) ? [...this.config.default] : this.config.default;
      this.updateEvent(newValue);
    },
  },
};
</script>