import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/shared/user-service';
import { UserProfile } from 'src/app/userprofile';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { EditProfileModal } from './edit-profile-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  @ViewChild(EditProfileModal,{read : true,static:false})

  editing = false;
  userProfile = new UserProfile();
  constructor(private _userService : UserService, private dialog : MatDialog) { }

  ngOnInit() {
    this._userService.getUserProfile().subscribe(
      (res:UserProfile) => this.userProfile = res);
    }
  onEdit(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.userProfile;
    console.log(dialogConfig.data)
    this.dialog.open(EditProfileModal,dialogConfig);
  }
    
  }
