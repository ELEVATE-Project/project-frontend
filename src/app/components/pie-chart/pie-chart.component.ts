import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent  implements OnInit {
  public pieChartOptions = {
    responsive: true,
  };

  chartData: any = [{ data: [11,4,3], label: "" }];
  chartLabels = ["Completed", "In Progress", "Not Started"];

  chartOptions = {
    responsive: true,
  }
  projects: any;
  constructor() { }

  ngOnInit() {}

}
