<template>
  <settings-page-component :config="config"></settings-page-component>
</template>

<script>
import SettingsPageComponent from './SettingsParseToComponent.vue';

export default {
  name: 'App',
  components: {
    SettingsPageComponent
  },
  data() {
    return {
      config: {
        "version": "1.0.0",
        "settings": {
          "header-color": {
            "type": "section-header",
            "title": "Color Settings",
            "description": "Choose the colors for your app.",
          },
          "no-setting-color": {
            "type": "no-settings",
            "title": "",
            "description": "This settings section focuses on colors. You can choose the colors for the background and the statistic items.",
          },
          "color-picker-background": {
            "type": "color-picker",
            "default": "#232323",
            "selected": "#000000",
            "title": "Background Color",
            "description": "Select the color for the background.",
          },
          "color-picker-statistic-item": {
            "type": "color-picker",
            "default": "#3a3a3a",
            "selected": "#000000",
            "title": "Statistic Item Color",
            "description": "Select the color for the statistic items.",
          },
          "header-items": {
            "type": "section-header",
            "title": "Item Settings",
            "description": "Settings for the statistic items.",
          },
          "no-setting-items": {
            "type": "no-settings",
            "title": "",
            "description": "This settings section focuses on the statistic items. You can toggle the items you want to see and select the unit you want to use.",
          },
          "toggle-items": {
            "type": "select-multiple",
            "default": ["total-shipments", "daily-sales", "completed-tasks"],
            "selected": ["total-shipments", "daily-sales", "completed-tasks"],
            "title": "Toggle Items",
            "description": "Toggle the items you want to see.",
            "values": [
              {
                "title": "Total Shipments",
                "value": "total-shipments"
              },
              {
                "title": "Daily Sales",
                "value": "daily-sales"
              },
              {
                "title": "Completed Tasks",
                "value": "completed-tasks"
              }
            ]
          },
          "select-unit": {
            "type": "select-one",
            "default": "exact",
            "selected": "exact",
            "title": "Select Unit",
            "description": "Select the unit you want to use.",
            "values": [
              {
                "title": "Exact",
                "value": "exact"
              },
              {
                "title": "Thousands",
                "value": "thousands"
              },
              {
                "title": "Millions",
                "value": "millions"
              }
            ]
          },
          "transparency-slider": {
            "type": "percentage-slider",
            "default": 100,
            "selected": 100,
            "title": "Transparency Slider",
            "description": "Adjust the transparency of the statistic items.",
          },
        }
      }
    };
  }
};
</script>
