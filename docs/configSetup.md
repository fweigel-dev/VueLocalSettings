# How to Set Up the Configuration

The configuration is done in the `config/localSettingsConfig.js` file. Thi file contains a JSON object with the settings
for the app. The settings are divided into sections, and each section contains the settings for a specific part of the
app. The settings are defined using the following types:

- `section-header`: A section header.
- `no-settings`: A section with no settings.
- `color-picker`: A color picker setting.
- `select-multiple`: A setting that allows the user to select multiple values from a list.
- `select-one`: A setting that allows the user to select one value from a list.
- `percentage-slider`: A setting that allows the user to select a percentage value using a slider.

## How to Define the Settings

The settings start with the `version` property, which specifies the version of the configuration. For more information
about the versioning, see `TODO: Add link to the versioning section`.

```json
{
  "version": "1.0.0",
  "settings": {
    // The setting types go here.
  }
}
```

## How to Define a Section Header

To define a section header, use the `section-header` type. The section header has the following properties:

- `title`: The title of the section.
- `description`: The description of the section.

```json
{
  "id": {
    "type": "section-header",
    "title": "This is a section header",
    "description": "The description of the section header."
  }
}
```

## How to Define a Section with No Settings

To define a section with no settings, use the `no-settings` type. It's the same as the Section Header with slightly
other css. The section with no settings has the following properties:

- `title`: The title of the section.
- `description`: The description of the section.

```json
{
  "id": {
    "type": "no-settings",
    "title": "A section with no settings",
    "description": "The description of the section with no settings."
  }
}
```

## How to Define a Color Picker Setting

To define a color picker setting, use the `color-picker` type. The color picker setting has the following properties:

- `default`: The default value of the setting.
- `selected`: The selected value of the setting.
- `title`: The title of the setting.
- `description`: The description of the setting.

```json
{
  "id": {
    "type": "color-picker",
    "default": "#232323",
    "selected": "#000000",
    "title": "Background Color",
    "description": "Select the color for the background."
  }
}
```

## How to Define a Select Multiple Setting

To define a select multiple setting, use the `select-multiple` type. The select multiple setting has the following
properties:

- `default`: The default value of the setting.
- `selected`: The selected value of the setting.
- `title`: The title of the setting.
- `description`: The description of the setting.
- `values`: The values of the setting.

```json
{
  "id": {
    "type": "select-multiple",
    "default": [
      "value1",
      "value2"
    ],
    "selected": [
      "value1",
      "value2"
    ],
    "title": "Toggle Items",
    "description": "Toggle the items you want to see.",
    "values": [
      {
        "title": "Value 1",
        "value": "value1"
      },
      {
        "title": "Value 2",
        "value": "value2"
      }
    ]
  }
}
```

## How to Define a Select One Setting

To define a select one setting, use the `select-one` type. The select one setting has the following properties:

- `default`: The default value of the setting.
- `selected`: The selected value of the setting.
- `title`: The title of the setting.
- `description`: The description of the setting.
- `values`: The values of the setting.

```json
{
  "id": {
    "type": "select-one",
    "default": "value1",
    "selected": "value1",
    "title": "Select Unit",
    "description": "Select the unit you want to use.",
    "values": [
      {
        "title": "Value 1",
        "value": "value1"
      },
      {
        "title": "Value 2",
        "value": "value2"
      }
    ]
  }
}
```

## How to Define a Percentage Slider Setting

To define a percentage slider setting, use the `percentage-slider` type. The percentage slider setting has the following
properties:

- `default`: The default value of the setting.
- `selected`: The selected value of the setting.
- `title`: The title of the setting.
- `description`: The description of the setting.
- `min`: Define the minimum value a slider can represent.
- `max`: Set the maximum value achievable on a slider.
- `steps`: Determine the incremental steps of the slider.
- `unit`: The associated unit of measurement.
- `points`: Display value markers at predetermined points.

```json
{
  "id": {
    "type": "percentage-slider",
    "default": 100,
    "selected": 100,
    "title": "Transparency Slider",
    "description": "Adjust the transparency of the statistic items.",
    "min": 0,
    "max": 100,
    "steps": 5,
    "unit": "%",
    "points": [0, 25, 50, 75, 100]
  }
}
```

## Example of a Configuration


```json
{
    version: "1.0.0",
    settings: {
        "header-color": {
            type: "section-header",
            title: "Color Settings",
            description: "Choose the colors for your app.",
        },
        "no-setting-color": {
            type: "no-settings",
            title: "",
            description: "This settings section focuses on colors. You can choose the colors for the background and the statistic items.",
        },
        "color-picker-background": {
            type: "color-picker",
            default: "#232323",
            selected: "#000000",
            title: "Background Color",
            description: "Select the color for the background.",
        },
        "color-picker-statistic-item": {
            type: "color-picker",
            default: "#3a3a3a",
            selected: "#000000",
            title: "Statistic Item Color",
            description: "Select the color for the statistic items.",
        },
        "header-items": {
            type: "section-header",
            title: "Item Settings",
            description: "Settings for the statistic items.",
        },
        "no-setting-items": {
            type: "no-settings",
            title: "",
            description: "This settings section focuses on the statistic items. You can toggle the items you want to see and select the unit you want to use.",
        },
        "toggle-items": {
            type: "select-multiple",
            default: ["total-shipments", "daily-sales", "completed-tasks"],
            selected: ["total-shipments", "daily-sales", "completed-tasks"],
            title: "Toggle Items",
            description: "Toggle the items you want to see.",
            values: [
                {
                    title: "Total Shipments",
                    value: "total-shipments"
                },
                {
                    title: "Daily Sales",
                    value: "daily-sales"
                },
                {
                    title: "Completed Tasks",
                    value: "completed-tasks"
                }
            ]
        },
        "select-unit": {
            type: "select-one",
            default: "exact",
            selected: "exact",
            title: "Select Unit",
            description: "Select the unit you want to use.",
            values: [
                {
                    title: "Exact",
                    value: "exact"
                },
                {
                    title: "Thousands",
                    value: "thousands"
                },
                {
                    title: "Millions",
                    value: "millions"
                }
            ]
        },
      "transparency-slider": {
        type: "percentage-slider",
        default: 100,
        selected: 100,
        title: "Transparency Slider",
        description: "Adjust the transparency of the statistic items.",
        min: 0,
        max: 100,
        steps: 5,
        unit: "%",
        points: [0, 25, 50, 75, 100]
      },
    }
}
```
