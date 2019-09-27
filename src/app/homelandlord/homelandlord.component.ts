import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-homelandlord',
  templateUrl: './homelandlord.component.html',
  styles: []
})
export class HomelandlordComponent implements OnInit {

  @ViewChild(NavbarComponent,{read :true,static:false}) navbar : NavbarComponent;

  constructor(private router : Router) { }

  ngOnInit() {
  }
  
}
