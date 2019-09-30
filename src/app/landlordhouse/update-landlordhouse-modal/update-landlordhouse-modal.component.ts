import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/shared/user-service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { House } from 'src/app/house';

@Component({
  selector: 'app-update-landlordhouse-modal',
  templateUrl: './update-landlordhouse-modal.component.html',
  styles: []
})
export class UpdateLandlordhouseModalComponent implements OnInit {

  house = new House();

  constructor(@Inject(MAT_DIALOG_DATA) public data,private _userService : UserService, private toastr : ToastrService, private dialog : MatDialog) { }
  
  ngOnInit() {
    this.house = this.data;
  }

  updateHouse(house:House){
    this._userService.updateHouse(house).subscribe( (res:any) => {
      if(res.succeeded){
        this.toastr.success('The house updated!','Update successful.')
        this.dialog.closeAll();        
      }else{
        this.toastr.error('Error','Creation failed.');
    }
  });
}

}
