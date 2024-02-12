<template>
  <div class="settings-container">
    <div v-for="(setting, key) in config.settings" :key="key">
      <component
          :is="getComponentType(setting.type)"
          :config="setting"
          :keyName="key"
          :min="setting.min"
          :max="setting.max"
          :steps="setting.steps"
          :unit="setting.unit"
          :points="setting.points"
          @update="handleUpdate(key, $event)"
      ></component>
    </div>
  </div>
</template>

<script>
import {config} from '../../config/localSettingsConfig.js';
import SettingsSelectOne from './SettingsSelectOne.vue';
import SettingsSelectMultiple from './SettingsSelectMultiple.vue';
import SettingsSelectNone from './SettingsSelectNone.vue';
import SettingsSectionHeader from "./SettingsSectionHeader.vue";
import SettingsPercentageSlider from './SettingsPercentageSlider.vue';
import SettingsColorPicker from "./SettingsColorPicker.vue";
import '../VueLocalSettingsStyle.css';

export default {
  name: 'SettingsContainer',
  components: {
    SettingsSelectOne,
    SettingsSelectMultiple,
    SettingsSelectNone,
    SettingsSectionHeader,
    SettingsPercentageSlider,
    SettingsColorPicker,
  },
  data() {
    return {
      config: config,
      selected: {},
    };
  },
  created() {
    const userSettings = localStorage.getItem('userSettings');
    if (userSettings) {
      this.loadSettings();
    } else {
      this.initializeSettings();
      location.reload();
    }
  },
  methods: {
    initializeSettings() {
      Object.keys(this.config.settings).forEach(key => {
        this.selected[key] = this.config.settings[key].default;
      });
      this.saveSettings();
    },
    getComponentType(type) {
      const componentMap = {
        'select-one': 'SettingsSelectOne',
        'select-multiple': 'SettingsSelectMultiple',
        'no-settings': 'SettingsSelectNone',
        'section-header': 'SettingsSectionHeader',
        'percentage-slider': 'SettingsPercentageSlider',
        'color-picker': 'SettingsColorPicker',
      };
      return componentMap[type] || 'div';
    },
    handleUpdate(key, event) {
      this.selected[key] = event.value;
      this.saveSettings();
    },
    saveSettings() {
      localStorage.setItem('userSettings', JSON.stringify(this.selected));
      location.reload();
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
    },
  }
};
</script>