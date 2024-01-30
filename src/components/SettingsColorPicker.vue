<template>
  <div class="settings-item">
    <span class="settings-title">{{ config.title }}</span>
    <p class="settings-description">{{ config.description }}</p>
    <div>
      <SettingsResetButton :config="config" :selectedValue="selectedValue"
                           :updateEvent="updateValue"></SettingsResetButton>
    </div>
    <div><input type="color" v-model="selectedValue" @change="updateColor">
    </div>
  </div>
</template>

<script>
import SettingsResetButton from "./SettingsResetButton.vue";
import settingsMixin from "../mixins/settingsMixin.js";

export default {
  name: "SettingsColorPicker",
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
    updateColor() {
      this.$emit('update', {value: this.selectedValue});
    },
  },
};
</script>