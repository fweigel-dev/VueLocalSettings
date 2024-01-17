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
          "header-1": {
            "type": "section-header",
            "title": "Header",
            "description": "This is a header section",
          },
          "select-one-1": {
            "type": "select-one",
            "default": "first",
            "selected": "first",
            "title": "Select One",
            "description": "You can only select one of the following options.",
            "values": [
              {
                "title": "First",
                "value": "first"
              },
              {
                "title": "Second",
                "value": "second"
              }
            ]
          },
          "no-setting-1": {
            "type": "no-settings",
            "title": "No Settings",
            "description": "This is used if you want to display a section without any settings.",
          },
          "select-one-2": {
            "type": "select-one",
            "default": "second",
            "selected": "second",
            "title": "Select One",
            "description": "You can only select one of the following options.",
            "values": [
              {
                "title": "First",
                "value": "first"
              },
              {
                "title": "Second",
                "value": "second"
              },
              {
                "title": "Third",
                "value": "third"
              }
            ]
          },
          "select-multiple-1": {
            "type": "select-multiple",
            "default": ["first", "second"],
            "selected": ["first", "second"],
            "title": "Select Multiple",
            "description": "You can select multiple of the following options.",
            "values": [
              {
                "title": "First",
                "value": "first"
              },
              {
                "title": "Second",
                "value": "second"
              },
              {
                "title": "Third",
                "value": "third"
              }

            ]
          },
          "percentage-slider-1": {
            "type": "percentage-slider",
            "default": 0,
            "selected": 0,
            "title": "Percentage Slider",
            "description": "Adjust the percentage level."
          }
          ,
          "percentage-slider-2": {
            "type": "percentage-slider",
            "default": 25,
            "selected": 25,
            "title": "Percentage Slider",
            "description": "Adjust the percentage level."
          },
        }
      }
    };
  }
};
</script>
