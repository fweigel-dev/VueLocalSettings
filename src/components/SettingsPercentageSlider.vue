<template>
  <div class="p-4 border border-gray-200 rounded">
    <span class="text-sm font-medium text-gray-700">{{ config.title }}</span>
    <p class="text-xs text-gray-500">{{ config.description }}</p>
    <SettingsResetButton :config="config" :selectedValue="selectedValue"
                         :updateEvent="updateValue"></SettingsResetButton>
    <input
        type="range"
        min="0"
        max="100"
        v-model="selectedValue"
        @input="emitChange"
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
    >
    <div class="text-center">
      <span class="text-sm">{{ selectedValue }}%</span>
    </div>
  </div>
</template>

<script>
import SettingsResetButton from "./SettingsResetButton.vue";

export default {
  name: "SettingsPercentageSliderComponent",
  components: {SettingsResetButton},
  props: {
    config: {
      type: Object,
      required: true,
    },
    selected: {
      type: Number,
      default: 0
    },
    keyName: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      selectedValue: this.selected || this.config.selected
    };
  },
  methods: {
    emitChange() {
      this.$emit('update', {value: this.selectedValue});
    },
    updateValue(newValue) {
      this.selectedValue = newValue;
      this.$emit('update', {value: this.selectedValue});
    },
  },
  watch: {
    selected(newValue) {
      this.selectedValue = newValue;
    },
  }
};
</script>
