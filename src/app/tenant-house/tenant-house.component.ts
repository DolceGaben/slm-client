import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../shared/user-service';
import { ToastrService } from 'ngx-toastr';
import { House } from '../house';
import { AllTenantHouseComponent } from './all-tenant-house/all-tenant-house.component';
import { AcceptedTenantHouseComponent } from './accepted-tenant-house/accepted-tenant-house.component';

@Component({
  selector: 'app-tenant-house',
  templateUrl: './tenant-house.component.html',
  styles: []
})

export class TenantHouseComponent implements OnInit {

  @ViewChild(AllTenantHouseComponent,{static:true}) allTenantHouse : AllTenantHouseComponent
  @ViewChild(AcceptedTenantHouseComponent,{static:true}) acceptedTenantHouse : AcceptedTenantHouseComponent
   
  houses = [];
  filter ='';
  constructor(private _userService : UserService, private toastr : ToastrService) { }

  ngOnInit() {
    this._userService.getTenantHouses('').subscribe((data : any)=> {
    this.houses = data
  })
}

  search(){
    this._userService.getTenantHouses(this.filter).subscribe((data : any)=> {
      this.houses = data
    });
  }

  
  

}
