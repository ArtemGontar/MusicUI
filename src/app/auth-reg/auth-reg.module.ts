import { NgModule } from '@angular/core';
import { AuthorizationComponent } from "./authorization/authorization.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AuthRegComponent } from "./auth-reg.component";
import { AuthRegRoutingModule } from "./auth-reg-routing.module";
import { SharedService } from '../services/sharedService/shared.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';
import { MainLayoutModule } from '../main-layout/main-layout.module';
@NgModule({
    declarations: [
      AuthorizationComponent,
      RegistrationComponent,
      AuthRegComponent,
      AuthorizationComponent,
      RegistrationComponent,
    ],
    imports: [
      AuthRegRoutingModule,
      MainLayoutModule,
      CommonModule,
      HttpClientModule,
    ],
    providers: [SharedService],
    bootstrap: [AuthRegComponent]
})

export class AuthRegModule {
  }