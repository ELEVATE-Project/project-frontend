import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent  implements OnInit {
  @Input() chartData: any;
  chartLabels = ["Started", "Not Started"];

  chartOptions = {
    responsive: true,
  }
  projects: any;
  constructor() { }

  ngOnInit() {}

}
