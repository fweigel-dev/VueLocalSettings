<template>
  <div class="settings-item">
    <span class="settings-title">{{ config.title }}</span>
    <p class="settings-description">{{ config.description }}</p>
    <SettingsResetButton :config="config" :selectedValue="selectedValue"
                         :updateEvent="updateValue"></SettingsResetButton>
    <input
        type="range"
        min="0"
        max="100"
        v-model="selectedValue"
        @input="emitChange"
        class="settings-slider"
    >
    <div class="text-center">
      <span class="text-sm">{{ selectedValue }}%</span>
    </div>
  </div>
</template>

<script>
import SettingsResetButton from "./SettingsResetButton.vue";
import settingsMixin from "../mixins/settingsMixin.js";

export default {
  name: "SettingsPercentageSliderComponent",
  components: {SettingsResetButton},
  mixins: [settingsMixin],
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
  methods: {
    emitChange() {
      this.$emit('update', {value: this.selectedValue});
    },
  },
};
</script>
