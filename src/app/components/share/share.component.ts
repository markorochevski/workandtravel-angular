import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveTestemonial(shareForm: NgForm) {
    // the form object
    console.log(shareForm.value);
    this.http.post('http://localhost:3000/posts/add-post', shareForm.value).subscribe(res => {
      console.log('Res:', res);
    });

    // TODO: change to different page
    this.router.navigate(['/']);
  }

}
