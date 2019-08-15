import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()

export class UserService {

  
  readonly BaseURI = 'https://localhost:44308/api';
  constructor(private fb: FormBuilder, private http : HttpClient){}

  formModel = this.fb.group({
    UserName :['',Validators.required],
    Email :['',Validators.email],
    FullName :['',Validators.required],
    Role:['',Validators.required],
    Passwords :this.fb.group({
      Password : ['',[Validators.required,Validators.minLength(4)]],
      ConfirmPassword :['',Validators.required]},{validators : this.comparePasswords})
  });

  comparePasswords(fb : FormGroup){
    let confirmPasswordCtrl = fb.get('ConfirmPassword');
    if(confirmPasswordCtrl.errors == null || 'passwordMismatch' in confirmPasswordCtrl.errors){
      if(fb.get('Password').value != confirmPasswordCtrl.value)
          confirmPasswordCtrl.setErrors({ passwordMismatch : true});
        else
          confirmPasswordCtrl.setErrors(null);
    }
  }

  register(){
    var body = {
      UserName : this.formModel.value.UserName,
      Email : this.formModel.value.Email,
      FullName : this.formModel.value.FullName,
      Password : this.formModel.value.Passwords.Password,
      Role : this.formModel.value.Role
    }
    return this.http.post(this.BaseURI+'/ApplicationUser/Register',body);
  }

  login(formData){
    return this.http.post(this.BaseURI+'/ApplicationUser/Login',formData);
  }

  getUserProfile(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+ localStorage.getItem('token')})
    return this.http.get(this.BaseURI + '/UserProfile',{headers : tokenHeader});
  }
  
  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}




