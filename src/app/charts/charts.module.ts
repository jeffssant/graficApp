import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ng2Charts from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { RoundComponent } from './pages/round/round.component';
import { RoundHttpComponent } from './pages/round-http/round-http.component';
import { ChartBarsComponent } from './components/chart-bars/chart-bars.component';


@NgModule({
  declarations: [
    BarsComponent,
    BarsDoubleComponent,
    RoundComponent,
    RoundHttpComponent,
    ChartBarsComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    ng2Charts.ChartsModule,
  ]
})
export class ChartsModule { }
