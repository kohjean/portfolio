import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  data() {
    return {
      datas: {
        labels: [
          'HTML',
          'CSS',
          'JavaScript',
          'PHP',
          'Others'
        ],
        datasets: [
          {
            data: [15, 20, 30, 15, 20],
            backgroundColor: [
              "#e76f51",
              "#f4a261",
              "#e9c46a",
              "#2a9d8f",
              "#264653"
            ],
          }
        ],
      },
      options: {
        responsive: true,
        legend: {
          position: 'right',
          labels: {
            boxWidth: 16,
            fontSize: 14,
          }
        },
        title: {
          display: true,
          text: '学習時間の割合',
          position: 'top'
        }
      }
    }
  },
  mounted() {
    this.renderChart(this.datas, this.options);
  }
}