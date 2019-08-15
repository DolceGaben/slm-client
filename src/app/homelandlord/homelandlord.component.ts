import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homelandlord',
  templateUrl: './homelandlord.component.html',
  styles: []
})
export class HomelandlordComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login'])
  }

}
