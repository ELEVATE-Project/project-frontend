import { Component, Input, OnInit } from '@angular/core';
import { chartLabels } from 'src/app/core/constants/';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent  implements OnInit {
  @Input() chartData: any
  @Input() title: any;
  chartLabels = [chartLabels.SELECTED, chartLabels.NOT_STARTED];

  chartOptions = {
    responsive: true,
  }
  projects: any;
  constructor() { }

  ngOnInit() {}

}
