import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user-service';

@Component({
  selector: 'app-accepted-tenant-house',
  templateUrl: './accepted-tenant-house.component.html',
  styles: []
})
export class AcceptedTenantHouseComponent implements OnInit {
  houses = []
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getTenantAcceptedHouses('').subscribe((data : any)=> {
      this.houses = data
  });
  }

}
