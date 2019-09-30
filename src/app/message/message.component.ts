import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user-service';
import { SendMessageModalComponent } from './send-message-modal/send-message-modal.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: []
})
export class MessageComponent implements OnInit {
  
  @ViewChild(NavbarComponent,{read :true,static:false}) navbar : NavbarComponent
  @ViewChild(SendMessageModalComponent,{read:true,static:false}) sendMessageModal : SendMessageModalComponent
  payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
  userRole : string;
  users = [];
  
  constructor(private _userService : UserService, private toastr : ToastrService, private dialog : MatDialog) { }

  ngOnInit() {
    this.userRole = this.payLoad.role;
    console.log(this.userRole);
    if(this.userRole == 'Landlord'){
    this._userService.getTenantList().subscribe((data : any)=> {
      this.users = data
  })
  }else if(this.userRole == 'Tenant'){
    this._userService.getLandlordList().subscribe((data : any)=> {
      this.users = data
  })
  }
}

  onSend(user){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = user;
    this.dialog.open(SendMessageModalComponent,dialogConfig);
  }

}
