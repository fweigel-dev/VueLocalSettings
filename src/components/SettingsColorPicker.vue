<template>
  <div class="p-4 border border-gray-200 rounded">
    <span class="text-sm font-medium text-gray-700">{{ config.title }}</span>
    <p class="text-xs text-gray-500">{{ config.description }}</p>
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