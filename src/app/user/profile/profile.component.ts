import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user-service';
import { UserProfile } from 'src/app/userprofile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  editing = false;
  userProfile = new UserProfile();
  constructor(private _userService : UserService) { }

  ngOnInit() {

    this._userService.getUserProfile().subscribe(
      (res:UserProfile) => this.userProfile = res);
    }

  editProfile(user : UserProfile){
  
  }
  editMode(){
    this.editing = true;
  }
    
  }
