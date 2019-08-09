import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router, private toastr : ToastrService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean{
      if(localStorage.getItem('token')!=null){
        return true;
      } else{
        this.router.navigate(['/user/login']);
        this.toastr.warning('access denied','log in first');
        return false;

        }
    }
  ;
  
}
