<template>
  <div class="settings-item">
    <span class="settings-title">{{ config.title }}</span>
    <p class="settings-description">{{ config.description }}</p>
    <SettingsResetButton :config="config" :selectedValue="selectedValue"
                         :updateEvent="updateValue"></SettingsResetButton>
    <div class="flex flex-wrap gap-2">
      <button
          v-for="option in config.values"
          :key="option.value"
          :class="['px-4 py-2 text-sm font-medium rounded-md shadow-sm', selectedValue.includes(option.value) ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-700']"
          @click="toggleSelection(option.value)"
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
  name: "SettingsSelectMultiple",
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
    toggleSelection(value) {
      const index = this.selectedValue.indexOf(value);
      if (index >= 0) {
        this.selectedValue.splice(index, 1);
      } else {
        this.selectedValue.push(value);
      }
      this.$emit('update', {value: this.selectedValue});
    },
  },
};
</script>