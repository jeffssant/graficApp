import { Component } from '@angular/core';

interface MenuItem{
  route: string;
  text: string

}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li{
        cursor: pointer
      }
    `
  ]
})
export class MenuComponent {

  menu: MenuItem[] = [
    { route: '/charts/bars', text: 'Bars'},
    { route: '/charts/bars-double', text: 'Bars Double'},
    { route: '/charts/round', text: 'Round'},
    { route: '/charts/round-http', text: 'Round Http'},
  ]

}
