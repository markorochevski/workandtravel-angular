import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-share',
  templateUrl: './confirm-share.component.html',
  styleUrls: ['./confirm-share.component.css']
})
export class ConfirmShareComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome(event){
    console.log('Go back');

    this.router.navigate(['/']);
  }

}
