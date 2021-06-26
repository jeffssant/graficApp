import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { }

  getUsersSocial() {
    return this.http.get('http://localhost:3000/grafic');
  }

  getRxjs(){
    return this.getUsersSocial()
            .pipe(
              map(data => {
                const labels = Object.keys(data);
                const values = Object.values(data);
                return {labels, values}
              })
            )
  }
}
