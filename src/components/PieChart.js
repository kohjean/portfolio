import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  data() {
    return {
      datas: {
        labels: ["HTML", "CSS", "JavaScript", "PHP", "Others"],
        datasets: [
          {
            data: [15, 20, 30, 15, 20],
            backgroundColor: [
              "#e76f51e6",
              "#f4a261e6",
              "#e9c46ae6",
              "#2a9d8fe6",
              "#264653e6",
            ],
            borderColor: [
              "#e76f5166",
              "#f4a26166",
              "#e9c46a66",
              "#2a9d8f66",
              "#26465366",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          position: "right",
          labels: {
            boxWidth: 16,
            fontSize: 14,
          },
        },
        title: {
          display: true,
          text: "学習時間の割合",
          position: "top",
          padding: 20,
          fontSize: 16,
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              let total = 0;
              let indexItem = data.datasets[0].data[tooltipItem.index];
              data.datasets[0].data.forEach((item) => {
                total += item;
              });
              return Math.round((indexItem / total) * 100) + " %";
            },
          },
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.datas, this.options);
  },
};
