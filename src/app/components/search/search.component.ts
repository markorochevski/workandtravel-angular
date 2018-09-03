import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  posts: any;
  searchQuery: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(params => {
      this.searchQuery = params.text;
      this.http.post('http://localhost:3000/posts/search', { text: params.text }).subscribe(res => {
        console.log('Result:', res);
        this.posts = res;
      });
    })
  }

  ngOnInit() {
  }

}
