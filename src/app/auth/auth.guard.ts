import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router, private toastr : ToastrService, private _userService : UserService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean{
      if(localStorage.getItem('token')!=null){
        let roles = next.data['permittedRoles'] as Array<string>;
        if(roles){
          if(this._userService.roleMatch(roles)) return true;
          else{
            this.router.navigate(['/forbidden']);
            return false;
          }
        }
        return true;
      } else{
        this.router.navigate(['/user/login']);
        this.toastr.warning('access denied','log in first');
        return false;

        }
    }
  ;
  
}
