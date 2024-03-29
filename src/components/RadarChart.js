import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  data() {
    return {
      data: {
        labels: [
          "フロントエンド",
          "サーバサイド",
          "ツール",
          "協調力",
          "自走力",
        ],
        datasets: [
          {
            data: [4, 3, 2, 4, 5],
            backgroundColor: "rgba(231,111,81,0.6)",
            label: "",
          },
        ],
      },
      options: {
        responsive: true,
        responsiveAnimationDuration: "500",
        legend: {
          labels: {
            boxWidth: 0,
            fontSize: 0,
          },
        },
        title: {
          display: true,
          text: "スキル",
          position: "top",
          padding: 20,
          fontSize: 16,
        },
        scale: {
          pointLabels: {
            fontSize: 14,
          },
          ticks: {
            min: 0,
            max: 5,
          },
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.data, this.options);
  },
};
