import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartsService } from '../../services/charts.service';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-round-http',
  templateUrl: './round-http.component.html',
  styles: [
  ]
})
export class RoundHttpComponent implements OnInit {

  constructor( private graficService: ChartsService) { }

  public doughnutChartLabels: Label[] = [];

  public doughnutChartData: MultiDataSet = [];

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#FFBB7A',
        '#1F20E6',
        '#61DDFF',
        '#61GHFF',
        '#84AFFf',
      ]
    }
  ]

  ngOnInit(): void {
    this.graficService.getUsersSocial()
    .subscribe(data => {
      const labels = Object.keys(data);
      const values = Object.values(data);

      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
    })
  }

}
