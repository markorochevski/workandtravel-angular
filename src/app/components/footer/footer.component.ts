import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerItems: {}[];
  contactEmail: string;
  constructor() { }

  ngOnInit() {
    this.footerItems = [
      { route: '/', displayName: 'Почетна'},
      { route: '/kontakt', displayName: 'Контакт'}
    ];
    this.contactEmail = 'contact@workandtravel-iskustva.mk';
  }

}
