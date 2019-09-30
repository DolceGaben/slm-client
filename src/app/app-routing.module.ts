import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomelandlordComponent } from './homelandlord/homelandlord.component';
import { HometenantComponent } from './hometenant/hometenant.component';
import { ProfileComponent } from './user/profile/profile.component';
import { Landlordhouse } from './landlordhouse/landlordhouse.component';
import { MessageComponent } from './message/message.component';
import { LandlordApplicationComponent } from './landlord-application/landlord-application.component';
import { TenantHouseComponent } from './tenant-house/tenant-house.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'}, 
  {
    path:'user',component :UserComponent,
    children: [
      {path:'registration', component : RegistrationComponent} ,
      {path:'login', component : LoginComponent}
    ]
  },
  {path:'profile', component : ProfileComponent, canActivate:[AuthGuard]},
  {path:'homelandlord',component : HomelandlordComponent, canActivate:[AuthGuard],data:{permittedRoles:['Landlord']}},
  {path:'hometenant',component : HometenantComponent, canActivate:[AuthGuard],data:{permittedRoles:['Tenant']}},
  {path:'forbidden',component: ForbiddenComponent},
  {path:'landlordhouse',component:Landlordhouse, canActivate:[AuthGuard],data:{permittedRoles:['Landlord']}},
  {path:'message',component:MessageComponent,canActivate:[AuthGuard]},
  {path:'landlord-application',component:LandlordApplicationComponent,canActivate:[AuthGuard],data:{permittedRoles:['Landlord']}},
  {path:'tenant-house',component:TenantHouseComponent,canActivate:[AuthGuard],data:{permittedRoles:['Tenant']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
