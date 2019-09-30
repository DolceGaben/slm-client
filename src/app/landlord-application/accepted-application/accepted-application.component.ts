import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user-service';
import { ToastrService } from 'ngx-toastr';
import { Application } from 'src/app/application';

@Component({
  selector: 'app-accepted-application',
  templateUrl: './accepted-application.component.html',
  styles: []
})
export class AcceptedApplicationComponent implements OnInit {

  applications = [];
  constructor(private _userService : UserService,private toastr : ToastrService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this._userService.getLandlordApplications("accepted").subscribe((data:any) =>{
      this.applications = data;})
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

}
