import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomelandlordComponent } from './homelandlord/homelandlord.component';
import { HometenantComponent } from './hometenant/hometenant.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'}, 
  {
    path:'user',component :UserComponent,
    children: [
      {path:'registration', component : RegistrationComponent} ,
      {path:'login', component : LoginComponent}
    ]
  },
  {path:'homelandlord',component : HomelandlordComponent, canActivate:[AuthGuard],data:{permittedRoles:['Landlord']}},
  {path:'hometenant',component : HometenantComponent, canActivate:[AuthGuard],data:{permittedRoles:['Tenant']}},
  {path:'forbidden',component: ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
