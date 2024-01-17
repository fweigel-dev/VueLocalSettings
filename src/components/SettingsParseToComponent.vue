<template>
  <div class="settings-page">
    <div v-for="(setting, key) in config.settings" :key="key">
      <component
          :is="getComponentType(setting.type)"
          :config="setting"
          :keyName="key"
          @update="handleUpdate(key, $event)"
      ></component>
    </div>
  </div>
</template>

<script>
import SettingsSelectOne from './SettingsSelectOne.vue';
import SettingsSelectMultiple from './SettingsSelectMultiple.vue';
import SettingsSelectNone from './SettingsSelectNone.vue';
import SettingsSectionHeader from "./SettingsSectionHeader.vue";
import SettingsPercentageSlider from './SettingsPercentageSlider.vue';

export default {
  name: "SettingsPageComponent",
  components: {
    SettingsSelectOne,
    SettingsSelectMultiple,
    SettingsSelectNone,
    SettingsSectionHeader,
    SettingsPercentageSlider,
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      settings: {},
      selected: {},
    };
  },
  created() {
    this.loadSettings();
  },
  methods: {
    getComponentType(type) {
      const componentMap = {
        'select-one': 'SettingsSelectOne',
        'select-multiple': 'SettingsSelectMultiple',
        'no-settings': 'SettingsSelectNone',
        'section-header': 'SettingsSectionHeader',
        'percentage-slider': 'SettingsPercentageSlider',
      };
      return componentMap[type] || 'div';
    },
    handleUpdate(key, event) {
      this.selected[key] = event.value;
      this.saveSettings();
    },
    saveSettings() {
      localStorage.setItem('userSettings', JSON.stringify(this.selected));
    },
    loadSettings() {
      this.settings = this.config.settings;

      const savedSelected = localStorage.getItem('userSettings');
      if (savedSelected) {
        this.selected = JSON.parse(savedSelected);
      } else {
        Object.keys(this.settings).forEach(key => {
          this.selected[key] = this.settings[key].selected;
        });
      }
    }
  }
};
</script>