import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user-service';
import { House } from 'src/app/house';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-tenant-house',
  templateUrl: './all-tenant-house.component.html',
  styles: []
})
export class AllTenantHouseComponent implements OnInit {
  houses = []
  constructor(private _userService : UserService, private toastr:ToastrService) { }

  ngOnInit() {
    this._userService.getTenantHouses('').subscribe((data : any)=> {
      this.houses = data
  });}

  sendApplication(house: House){
    this._userService.sendApplication(house).subscribe(
      (res:any) =>
      {
        if(res.succeeded){
          this.toastr.success("Apllication created","Creation succeesful")
        }
      },
        err =>{
          if(err.status == 400){
          this.toastr.error('Application already exist.','Creation failed');
          }
      }
    )
  }
}
