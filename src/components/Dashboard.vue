<template>
  <div class="dashboard" :style="{ backgroundColor: backgroundColor }">
    <div class="main-content">
      <div class="statistics">
        <div class="statistic-item" v-if="isItemVisible('total-shipments')"
             :style="{ backgroundColor: statisticItemColor, opacity: transparency / 100 }">
          <div class="statistic-value">{{ formatValue(totalShipments) }}</div>
          <div class="statistic-label">Total Shipments</div>
        </div>
        <div class="statistic-item" v-if="isItemVisible('daily-sales')"
             :style="{ backgroundColor: statisticItemColor, opacity: transparency / 100 }">
          <div class="statistic-value">{{ formatValue(dailySales) }}</div>
          <div class="statistic-label">Daily Sales</div>
        </div>
        <div class="statistic-item" v-if="isItemVisible('completed-tasks')"
             :style="{ backgroundColor: statisticItemColor, opacity: transparency / 100 }">
          <div class="statistic-value">{{ formatValue(completedTasks) }}</div>
          <div class="statistic-label">Completed Tasks</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../VueLocalSettingsStyle.css';

export default {
  components: {},
  data() {
    return {
      totalShipments: 2763215,
      dailySales: 3500,
      completedTasks: 1200,
      backgroundColor: '',
      statisticItemColor: '',
      visibleItems: [],
      unit: '',
      transparency: 100,
    };
  },
  created() {
    const userSettings = JSON.parse(localStorage.getItem('userSettings'));
    if (userSettings) {
      this.backgroundColor = userSettings['color-picker-background'];
      this.statisticItemColor = userSettings['color-picker-statistic-item'];
      this.visibleItems = userSettings['toggle-items'];
      this.unit = userSettings['select-unit'];
      this.transparency = userSettings['transparency-slider'];
    }
  },
  methods: {
    isItemVisible(item) {
      return this.visibleItems.includes(item);
    },
    formatValue(value) {
      switch (this.unit) {
        case 'thousands':
          return (value / 1000).toFixed(1) + 'K';
        case 'millions':
          return (value / 1000000).toFixed(1) + 'M';
        default:
          return value;
      }
    }
  }
};
</script>