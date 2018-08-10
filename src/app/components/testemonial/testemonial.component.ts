import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testemonial',
  templateUrl: './testemonial.component.html',
  styleUrls: ['./testemonial.component.css']
})
export class TestemonialComponent implements OnInit {

  cities: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cities = this.http.get<any>('http://localhost:3000/cities/get-cities');
  }

}
