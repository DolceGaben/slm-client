import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserService } from '../shared/user-service';
import { House } from '../house';
import { Toast, ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CreateLandlordhouseModalComponent } from './create-landlordhouse-modal/create-landlordhouse-modal.component';
import { UpdateLandlordhouseModalComponent } from './update-landlordhouse-modal/update-landlordhouse-modal.component';

@Component({
  selector: 'app-house',
  templateUrl: './landlordhouse.component.html',
  styles: []
})
export class Landlordhouse implements OnInit {

  houses = [];
  filter ='';


  @ViewChild(CreateLandlordhouseModalComponent,{read : true,static:false}) createHouse : CreateLandlordhouseModalComponent;
  @ViewChild(UpdateLandlordhouseModalComponent,{read:true, static: false}) updateHouse : UpdateLandlordhouseModalComponent;
  @ViewChild(NavbarComponent,{read :true,static:false}) navbar : NavbarComponent
 

  constructor(private _userService : UserService, private toastr : ToastrService, private dialog : MatDialog) { }

  ngOnInit() {
    this.getData();
}

  onCreate(){
    this.dialog.open(CreateLandlordhouseModalComponent);
    this.getData();
}
  search(){
    this._userService.getLandlordHouses(this.filter).subscribe((data : any)=> {
      this.houses = data
    });
  }
  onEdit(house: House){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = house;
    console.log(dialogConfig.data)
    this.dialog.open(UpdateLandlordhouseModalComponent,dialogConfig);
  }
  getData(){
    this._userService.getLandlordHouses('').subscribe((data : any)=> {
      this.houses = data});
  }
  onDelete(house : House){
    this._userService.deleteHouse(house.id).subscribe((res:any) => {
      if(res.succeeded){

        this._userService.getLandlordHouses('').subscribe((data : any)=> {
          this.houses = data
        })

      }else{

      }
    });
  }


 
}


