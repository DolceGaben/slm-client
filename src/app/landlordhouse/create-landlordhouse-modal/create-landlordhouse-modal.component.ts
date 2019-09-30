import { Component, OnInit, Input } from '@angular/core';
import { House } from 'src/app/house';
import { UserService } from 'src/app/shared/user-service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-create-landlordhouse-modal',
  templateUrl: './create-landlordhouse-modal.component.html',
  styles: []
})
export class CreateLandlordhouseModalComponent implements OnInit {

  house = new House();

  constructor(private _userService : UserService, private toastr : ToastrService, private dialog : MatDialog) { }
  
  ngOnInit() {
  }

  createHouse(house:House){
    this._userService.createHouse(house).subscribe( (res:any) => {
      if(res.succeeded){
        this.toastr.success('New house created!','Creation successful.')
        this.dialog.closeAll();
        location.reload();
        
      }else{
        this.toastr.error('Error','Creation failed.');
    }
  });
}
}


