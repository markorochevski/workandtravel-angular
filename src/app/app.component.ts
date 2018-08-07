import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Work and Travel';
  //cities = this.http.get<any>('http://localhost:3000/cities/get-cities');
  constructor(private http: HttpClient){}
}
