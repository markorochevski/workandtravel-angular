import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('Cities component...');
    this.cities = this.http.get<any>('http://localhost:3000/cities/get-cities');
    console.log('Cities: ', this.cities);
  }

}
