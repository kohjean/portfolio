import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  data() {
    return {
      datas: {
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
            backgroundColor: "#e76f5180",
            label: "",
          },
        ],
      },
      options: {
        responsive: true,
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
    this.renderChart(this.datas, this.options);
  },
};
