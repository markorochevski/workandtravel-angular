import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-banner',
  templateUrl: './side-banner.component.html',
  styleUrls: ['./side-banner.component.css']
})
export class SideBannerComponent implements OnInit {
  banner_url: string;

  constructor() { }

  ngOnInit() {
    this.banner_url = 'https://www.dexter.mk';
  }

}
