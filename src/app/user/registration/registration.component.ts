import { Component, OnInit } from '@angular/core';
import { UserService} from 'src/app/shared/user-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  
  constructor(public _userService : UserService, private toastr : ToastrService, private router : Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')!= null){
      this.router.navigateByUrl('/home');
    }
   
  }
  
  onSubmit(){
    this._userService.register().subscribe(
      (res : any) => {
        if(res.succeeded){
          this._userService.formModel.reset();
          this.router.navigate(['/user/login']);
          this.toastr.success('New user created!','Registration successful.')
        
        }else{
        res.errors.forEach(element => {
          switch(element.code){
            case 'DuplicateUserName':
                this.toastr.error('Username is already taken','Registration failed.')
              break;
              default:
                this.toastr.error(element.description,'Registration failed.')
              break;
          }
            
          });
        }
      },
      err => {
        console.log(err)
      }
    )
  }

 

}
