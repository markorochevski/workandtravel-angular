import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveTestemonial(shareForm: NgForm) {
    console.log(shareForm.value);
  }

}
