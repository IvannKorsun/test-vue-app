<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="charts"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :width="width"
    :height="height"
  />

  <button @click="limit = 10">Show 10</button>
  <button @click="limit = 30">Show 30</button>
  <button @click="limit = 50">Show 50</button>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      limit: 50,
      chartId: "bar-chart",
      datasetIdKey: "label",
      width: 1000,
      height: 700,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  components: { Bar },
  created() {
    this.getCharts(this.limit);
  },
  watch: {
    limit(v) {
      this.getCharts(v);
    },
  },
  computed: {
    ...mapGetters(["charts"]),
  },
  methods: {
    ...mapActions(["getCharts"]),
  },
};
</script>
