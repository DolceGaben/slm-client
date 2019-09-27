import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
   payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
   userRole : string;

  constructor(private router : Router) { }

  ngOnInit() {
    this.userRole = this.payLoad.role;
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login'])
  }


}
