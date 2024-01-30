<template>
  <div class="settings-item">
    <span class="settings-title">{{ config.title }}</span>
    <p class="settings-description">{{ config.description }}</p>
    <SettingsResetButton :config="config" :selectedValue="selectedValue"
                         :updateEvent="updateValue"></SettingsResetButton>
    <div class="settings-spread-button">
      <button
          v-for="option in config.values"
          :key="option.value"
          :class="['settings-setting-button', option.value === selectedValue ? 'settings-setting-selected' : 'settings-setting-unselected']"
          @click="selectOption(option.value)"
      >
        {{ option.title }}
      </button>
    </div>
  </div>
</template>

<script>
import SettingsResetButton from "./SettingsResetButton.vue";
import settingsMixin from "../mixins/settingsMixin.js";

export default {
  name: "SettingsSelectOne",
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
  },
  methods: {
    selectOption(value) {
      this.selectedValue = value;
      this.$emit('update', {value: this.selectedValue});
    },
  },
};
</script>