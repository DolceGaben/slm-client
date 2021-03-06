import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formModel={
    UserName : '',
    Password : ''
  }
  constructor(private _userService : UserService, private router : Router, private toastr : ToastrService) { }

  ngOnInit() {
    if(localStorage.getItem('token')!= null){
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit(form : NgForm){
    this._userService.login(form.value).subscribe(
      (res:any) =>{
        localStorage.setItem('token',res.token);
        if(this._userService.roleMatch(["Landlord"])){
          this.router.navigateByUrl('/homelandlord');
        }else{
          this.router.navigateByUrl('/hometenant');
        }
        this.toastr.success('Login successed','Loged in')
      },
      err =>{
        if(err.status == 400){
        this.toastr.error('Incorrect username or password.','Authentication failed');
        }else{
        }
      }
    )
  } 

}
