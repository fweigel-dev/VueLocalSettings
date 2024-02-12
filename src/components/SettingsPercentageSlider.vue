<template>
  <div class="settings-item">
    <span class="settings-title">{{ config.title }}</span>
    <p class="settings-description">{{ config.description }}</p>
    <SettingsResetButton :config="config" :selectedValue="selectedValue"
                         :updateEvent="updateValue"></SettingsResetButton>
    <div class="slider-container">
      <input
          type="range"
          :min="min"
          :max="max"
          v-model="selectedValue"
          @input="emitChange"
          class="settings-slider"
          :step="steps"
      >
      <div class="slider-points">
        <span v-for="point in points" :key="point" class="slider-point"
              v-show="point >= min && point <= max" :style="pointStyle(point)">
        </span>
        <span v-for="point in points" :key="point" class="slider-point-value"
              v-show="point >= min && point <= max" :style="pointStyleValue(point)">{{ point }}{{ unit }}</span>
      </div>
    </div>
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
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    steps: {
      type: Number,
      default: 1,
    },
    unit: {
      type: String,
      default: "%",
    },
    points: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    emitChange() {
      this.$emit('update', {value: this.selectedValue});
    },
    pointStyle(point) {
      const position = (point - this.min) / (this.max - this.min) * 100;
      return {
        left: `${position}%`,
        position: 'absolute',
      };
    },
      pointStyleValue(point) {
        const position = (point - this.min) / (this.max - this.min) * 100;
        return {
          left: `${position}%`,
          position: 'absolute',
        };
      },
    },
};
</script>