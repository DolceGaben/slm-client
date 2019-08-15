import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hometenant',
  templateUrl: './hometenant.component.html',
  styles: []
})
export class HometenantComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login'])
  }

}
