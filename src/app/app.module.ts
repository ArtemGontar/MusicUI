import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SuggestionBoxComponent } from './suggestion-box/suggestion-box.component';
import { PlayerComponent } from './player/player.component';
import { AuthorizationComponent } from './auth-reg/authorization/authorization.component';
import { RegistrationComponent } from './auth-reg/registration/registration.component';
import { SharedService } from './shared.service';
import { AuthRegComponent } from './auth-reg/auth-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuggestionBoxComponent,
    PlayerComponent,
    AuthorizationComponent,
    RegistrationComponent,
    AuthRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
