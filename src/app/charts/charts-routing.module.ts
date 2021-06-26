import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { RoundComponent } from './pages/round/round.component';
import { RoundHttpComponent } from './pages/round-http/round-http.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'bars', component: BarsComponent},
      {path: 'bars-double', component: BarsDoubleComponent},
      {path: 'round', component: RoundComponent},
      {path: 'round-http', component: RoundHttpComponent},
      {path: '**', redirectTo: 'bars'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
