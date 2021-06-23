import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chart: any;
  month: any[] = [];
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.loadChart();
    this.month = [
      { "key": "Jan", "value": "Jan" },
      { "key": "Feb", "value": "Feb" },
      { "key": "Mar", "value": "Mar" },
      { "key": "April", "value": "April" },
      { "key": "May", "value": "May" },
      { "key": "June", "value": "June" },
      { "key": "July", "value": "July" },
      { "key": "Aug", "value": "Aug" },
      { "key": "Sep", "value": "Sep" },
      { "key": "Oct", "value": "Oct" },
      { "key": "Nov", "value": "Nov" },
      { "key": "Dec", "value": "Dec" }

    ]
  }
  loadChart() {

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      // plugins: [ChartDataLabels],
      type: 'doughnut',
      data: {
        labels: ['Coaching for Rookie', 'Product Refresher', 'POSP Connect', 'Partner Training', 'ASCEND'],
        datasets: [{
          // label: 'Students (Lakhs)',
          data: [10, 9, 8, 7, 6],
          backgroundColor: ['#6B9ED5', '#52D1D6', '#F6AD7F', '#22AC8C', '#F58388'],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          position: 'right',
          display: false,
          labels: {

            boxWidth: 10
          }
        },
        layout: {
          padding: {
            left: 25,
            right: 0,
            top: 0,
            bottom: 0
          },
        },
        responsive: false,
        scales: {
          // yAxes: [{
          //     ticks: {
          //         beginAtZero: true
          //     }
          // }]
        },

        plugins: {
          // Change options for ALL labels of THIS CHART
          datalabels: {
            display: false,
            //   formatter: (value, ctx) => {
            //   const datasets = ctx.chart.data.datasets;
            //   if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
            //     const sum = datasets[0].data.reduce((a, b) => a + b, 0);
            //     const  percentage = Math.round((value / sum) * 100) + '%';
            //     return percentage;
            //   } else {
            //     return percentage;
            //   }
            // },

            color: '#fffefc',
            anchor: 'center',
            clamp: true,
            align: 'center'
          }
        }
      }
    });

  }
  goToCalender() {
    this.router.navigate(['/calender']);
  }
}
