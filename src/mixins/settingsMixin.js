export default {
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
    updateValue(newValue) {
      this.selectedValue = newValue;
      this.$emit('update', {value: this.selectedValue});
    },
  },
};