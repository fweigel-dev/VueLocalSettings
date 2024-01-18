<template>
  <div class="p-4 border border-gray-200 rounded">
    <span class="text-sm font-medium text-gray-700">{{ config.title }}</span>
    <p class="text-xs text-gray-500">{{ config.description }}</p>
    <SettingsResetButton :config="config" :selectedValue="selectedValue"
                         :updateEvent="updateValue"></SettingsResetButton>
    <div class="flex gap-2">
      <button
          v-for="option in config.values"
          :key="option.value"
          :class="['px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm', option.value === selectedValue ? 'bg-indigo-500' : 'bg-gray-300']"
          @click="selectOption(option.value)"
      >
        {{ option.title }}
      </button>
    </div>
  </div>
</template>

<script>
import SettingsResetButton from "./SettingsResetButton.vue";

export default {
  name: "SettingsSelectOne",
  components: {SettingsResetButton},
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
  data() {
    return {
      selectedValue: null,
    };
  },
  created() {
    const savedSelected = localStorage.getItem('userSettings');
    if (savedSelected) {
      const userSettings = JSON.parse(savedSelected);
      this.selectedValue = userSettings[this.keyName] || this.config.selected;
    } else {
      this.selectedValue = this.config.selected;
    }
  },
  methods: {
    selectOption(value) {
      this.selectedValue = value;
      this.$emit('update', {value: this.selectedValue});
    },
    updateValue(newValue) {
      this.selectedValue = newValue;
      this.$emit('update', {value: this.selectedValue});
    },
  },
};
</script>