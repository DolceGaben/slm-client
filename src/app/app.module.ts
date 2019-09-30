import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user-service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './user/login/login.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomelandlordComponent } from './homelandlord/homelandlord.component';
import { HometenantComponent } from './hometenant/hometenant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './user/profile/profile.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { EditProfileModal } from './user/profile/edit-profile-modal.component';
import { Landlordhouse } from './landlordhouse/landlordhouse.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CreateLandlordhouseModalComponent } from './landlordhouse/create-landlordhouse-modal/create-landlordhouse-modal.component';
import { MessageComponent } from './message/message.component';
import { SendMessageModalComponent } from './message/send-message-modal/send-message-modal.component';
import { UpdateLandlordhouseModalComponent } from './landlordhouse/update-landlordhouse-modal/update-landlordhouse-modal.component';
import { WaitingApplicationComponent } from './landlord-application/waiting-application/waiting-application.component';
import { AcceptedApplicationComponent } from './landlord-application/accepted-application/accepted-application.component';
import { RejectedApplicationComponent } from './landlord-application/rejected-application/rejected-application.component';
import { LandlordApplicationComponent } from './landlord-application/landlord-application.component';
import { TenantHouseComponent } from './tenant-house/tenant-house.component';
import { AcceptedTenantHouseComponent } from './tenant-house/accepted-tenant-house/accepted-tenant-house.component';
import { AllTenantHouseComponent } from './tenant-house/all-tenant-house/all-tenant-house.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    ForbiddenComponent,
    HomelandlordComponent,
    HometenantComponent,
    NavbarComponent,
    ProfileComponent,
    EditProfileModal,
    Landlordhouse,
    CreateLandlordhouseModalComponent,
    MessageComponent,
    SendMessageModalComponent,
    UpdateLandlordhouseModalComponent,
    WaitingApplicationComponent,
    AcceptedApplicationComponent,
    RejectedApplicationComponent,
    LandlordApplicationComponent,
    TenantHouseComponent,
    AcceptedTenantHouseComponent,
    AllTenantHouseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    NgbModule,
    MatDialogModule,
    AngularFontAwesomeModule
  ],
  providers: [UserService,{
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent],
  entryComponents: [EditProfileModal,CreateLandlordhouseModalComponent,UpdateLandlordhouseModalComponent, SendMessageModalComponent]
})
export class AppModule { }
