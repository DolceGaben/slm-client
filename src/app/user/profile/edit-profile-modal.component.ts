import { Component, OnInit, ViewChild, Input, Output, Inject } from '@angular/core';
import { UserService } from 'src/app/shared/user-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserProfile } from 'src/app/userprofile';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { EventEmitter } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-editProfileModal',
  templateUrl: './edit-profile-modal.component.html',
  styles: []
})
export class EditProfileModal implements OnInit {

    userProfile = new UserProfile();

    constructor(@Inject(MAT_DIALOG_DATA) public data,private _userService : UserService, private router : Router, private toastr : ToastrService, private dialog : MatDialog) { }
    ngOnInit() {
        this.userProfile = this.data;
        }
    // TODO : Username check before edit.
    submitEdit(userData: UserProfile){
      this._userService.editProfile(userData).subscribe(
        (res:any) => {
          if(res.succeeded){
            this.dialog.closeAll();
            this.toastr.success("Profile edited","Update successful")
          }else{
            this.toastr.error('Error!','Edit unsuccessful.');
            }
        });
      };


}
