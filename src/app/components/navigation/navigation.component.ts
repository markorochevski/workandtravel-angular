import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navigationItems: {}[];

  constructor() { }

  ngOnInit() {
    this.navigationItems = [
      { route: '/', displayName: 'Почетна'},
      { route: '/iskustva', displayName: 'Искуства'},
      { route: '/prasanja', displayName: 'Прашања'}
    ]
  }

}
