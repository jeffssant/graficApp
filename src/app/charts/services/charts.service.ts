import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { }

  getUsersSocial() {
    return this.http.get('http://localhost:3000/grafic');
  }
}
