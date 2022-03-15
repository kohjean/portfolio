import { Bubble } from "vue-chartjs";
import chartjsPluginDatalabels from "chartjs-plugin-datalabels";

export default {
  extends: Bubble,
  data() {
    return {
      data: {
        datasets: [
          {
            label: "フロント",
            backgroundColor: "rgba(255,221,50,0.6)",
            data: [
              {
                x: 90,
                y: 60,
                r: 25,
              },
            ],
          },
          {
            label: "サーバサイド",
            backgroundColor: "rgba(31,151,252,0.6)",
            data: [
              {
                x: 40,
                y: 50,
                r: 25,
              },
            ],
          },
          {
            label: "インフラ",
            backgroundColor: "rgba(231,111,81,0.6)",
            data: [
              {
                x: -10,
                y: 0,
                r: 25,
              },
            ],
          },
          {
            label: "デザイン",
            backgroundColor: "rgba(56,163,165,0.6)",
            data: [
              {
                x: 80,
                y: 5,
                r: 25,
              },
            ],
          },
          {
            label: "モバイルアプリ",
            backgroundColor: "rgba(11,246,116,0.6)",
            data: [
              {
                x: 55,
                y: -65,
                r: 25,
              },
            ],
          },
          {
            label: "AI",
            backgroundColor: "rgba(33,158,188,0.6)",
            data: [
              {
                x: -50,
                y: -70,
                r: 25,
              },
            ],
          },
          {
            label: "AR/VR",
            backgroundColor: "rgba(247,36,133,0.6)",
            data: [
              {
                x: 35,
                y: -70,
                r: 25,
              },
            ],
          },
          {
            label: "UI/UX",
            backgroundColor: "rgba(255,51,40,0.6)",
            data: [
              {
                x: 90,
                y: -50,
                r: 25,
              },
            ],
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "関心と経験",
          position: "top",
          padding: 20,
          fontSize: 16,
        },
        legend: {
          // display: false,
          labels: {
            boxWidth: 12,
          }
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
                max: 100,
                min: -100,
              },
              scaleLabel: {
                display: true,
                labelString: "経験ある",
                fontColor: "#7E7E7E",
                fontFamily: "sans-serif",
                fontSize: 16,
              },
              position: "top",
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
                max: 100,
                min: -100,
              },
              scaleLabel: {
                display: true,
                labelString: "関心ある",
                fontColor: "#7E7E7E",
                fontFamily: "sans-serif",
                fontSize: 16,
              },
              position: "right",
            },
          ],
        },
        plugins: {
          datalabels: {
            formatter: (dp, ctx) => ctx.dataset.label,
          },
        },
      },
    };
  },
  mounted() {
    this.addPlugin(chartjsPluginDatalabels);
    this.renderChart(this.data, this.options);
  },
};
