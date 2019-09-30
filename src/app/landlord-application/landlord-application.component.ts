import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { House } from 'src/app/house';
import { UserService } from 'src/app/shared/user-service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';
import { NavbarComponent } from '../navbar/navbar.component';
import { AcceptedApplicationComponent } from './accepted-application/accepted-application.component';
import { RejectedApplicationComponent } from './rejected-application/rejected-application.component';
import { WaitingApplicationComponent } from './waiting-application/waiting-application.component';

@Component({
  selector: 'app-landlord-application',
  templateUrl: './landlord-application.component.html',
  styles: []
})
export class LandlordApplicationComponent implements OnInit {

  @ViewChild(NavbarComponent,{read :true,static:false}) navbar : NavbarComponent;
  @ViewChild(AcceptedApplicationComponent,{static:true}) acceptedApplication :AcceptedApplicationComponent;
  @ViewChild(RejectedApplicationComponent,{static:true}) rejectedApplication :RejectedApplicationComponent;
  @ViewChild(WaitingApplicationComponent,{static:true}) waitingApplication : WaitingApplicationComponent;

  constructor(private _userService : UserService, private toastr : ToastrService, private dialog : MatDialog) { }
  
  ngOnInit() {
  }

}


