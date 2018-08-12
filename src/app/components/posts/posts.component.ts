import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  route_name: string;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    console.log('In posts component');
    this.route.paramMap.subscribe(params => {
      this.route_name = params.get('route_name');
    });
    console.log('Route name: ', this.route_name);
    this.posts = this.http.get('http://localhost:3000/posts/get-posts/'+this.route_name);
    console.log('Posts: ', this.posts);
  }

}
