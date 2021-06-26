import { Component } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styles: [
  ]
})
export class RoundComponent {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#FFBB7A',
        '#1F20E6',
        '#61DDFF'
      ]
    }
  ]



}
