import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user-service';
import { ToastrService } from 'ngx-toastr';
import { Application } from 'src/app/application';

@Component({
  selector: 'app-rejected-application',
  templateUrl: './rejected-application.component.html',
  styles: []
})
export class RejectedApplicationComponent implements OnInit {

  applications = [];
  constructor(private _userService : UserService, private toastr : ToastrService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this._userService.getLandlordApplications("rejected").subscribe((data:any) =>{
      this.applications = data;})
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

}
