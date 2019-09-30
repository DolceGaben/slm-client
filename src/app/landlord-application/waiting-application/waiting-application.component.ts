import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user-service';
import { Application } from 'src/app/application';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-waiting-application',
  templateUrl: './waiting-application.component.html',
  styles: []
})
export class WaitingApplicationComponent implements OnInit {

  applications = [];

  constructor(private _userService : UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getData();
  }
  reject(application : Application){
    application.status = "rejected";
    this._userService.updateApplication(application).subscribe((res:any) =>{
      if(res.succeeded){
        this.toastr.success("Rejected","Reject successful")
        this.getData();
      }else{
      }

    })
  }
  accept(application : Application){
    application.status = "accepted";
    this._userService.updateApplication(application).subscribe((res:any) =>{
      if(res.succeeded){
        this.toastr.success("Accepted","Accept successful")
        this.getData();
      }
    })
  }

  getData(){
    this._userService.getLandlordApplications("waiting").subscribe((data:any) =>{
      this.applications = data;})
  }

}
