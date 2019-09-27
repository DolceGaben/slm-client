import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-hometenant',
  templateUrl: './hometenant.component.html',
  styles: []
})
export class HometenantComponent implements OnInit {

  @ViewChild(NavbarComponent,{read:true,static:false}) navbar : NavbarComponent;
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

}
