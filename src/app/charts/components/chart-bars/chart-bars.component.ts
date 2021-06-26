import { Component, Input, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-bars',
  templateUrl: './chart-bars.component.html',
  styles: [
  ]
})
export class ChartBarsComponent implements OnInit {

  @Input() tipe: ChartType = 'bar';


  public barChartOptions: ChartOptions = {
    responsive: true
  };

  @Input() barChartLabels: Label[] = [];

  public barChartType: ChartType = this.tipe;
  public barChartLegend = true;


  @Input() barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit(): void {
    this.barChartType = this.tipe;
    console.log(this.tipe);
  }

}
