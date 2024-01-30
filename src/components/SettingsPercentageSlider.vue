<template>
  <div class="settings-item">
    <span class="settings-title">{{ config.title }}</span>
    <p class="settings-description">{{ config.description }}</p>
    <SettingsResetButton :config="config" :selectedValue="selectedValue"
                         :updateEvent="updateValue"></SettingsResetButton>
    <input
        type="range"
        :min="min"
        :max="max"
        v-model="selectedValue"
        @input="emitChange"
        class="settings-slider"
        :step="steps"
    >
    <div class="text-center">
      <span class="text-sm">{{ selectedValue }}{{ unit }}</span>
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
    },
    min : {
      type: Number,
      default: 0,
    },
    max : {
      type: Number,
      default: 100,
    },
    steps : {
      type: Number,
      default: 1,
    },
    unit : {
      type: String,
      default: "%",
    },
    points : {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    emitChange() {
      this.$emit('update', {value: this.selectedValue});
    },
  },
};
</script>
