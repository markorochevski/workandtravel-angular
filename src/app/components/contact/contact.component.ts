import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveContact(contactForm: NgForm) {
    // the form object
    console.log(contactForm.value);
    // TODO: change post link
    // this.http.post('http://localhost:3000/posts/add-post', contactForm.value).subscribe(res => {
    //   console.log('Res:', res);
    // });

    // TODO: change to different page
    this.router.navigate(['/']);
  }
}
