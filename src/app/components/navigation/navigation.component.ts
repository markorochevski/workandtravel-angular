import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navigationItems: {}[];
  search: string = null;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.navigationItems = [
      { route: '/', displayName: 'Почетна' },
      { route: '/iskustva', displayName: 'Искуства' },
      { route: '/prashanja', displayName: 'Прашања' },
      { route: '/soveti', displayName: 'Совети' },
      { route: '/spodeli', displayName: 'Сподели искуство' }
    ];
  }

  searchDatabase(searchForm: NgForm) {
    console.log(searchForm.value);
    const text = searchForm.value.search;

    this.search = '';
    this.router.navigate(['/prebaraj', { text: text }]);
  }

}
