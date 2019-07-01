import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-layout/header/header.component';
import { SuggestionBoxComponent } from './main-layout/home/suggestion-box/suggestion-box.component';
import { PlayerComponent } from './main-layout/player/player.component';
import { AuthorizationComponent } from './auth-reg/authorization/authorization.component';
import { RegistrationComponent } from './auth-reg/registration/registration.component';
import { SharedService } from './services/sharedService/shared.service';
import { AuthRegComponent } from './auth-reg/auth-reg.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './main-layout/home/home.component';
import { StreamComponent } from './main-layout/stream/stream.component';
import { FeedComponent } from './main-layout/feed/feed.component';
import { LibraryComponent } from './main-layout/library/library.component';
import { ChooseFavoriteComponent } from './main-layout/home/choose-favorite/choose-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuggestionBoxComponent,
    PlayerComponent,
    AuthorizationComponent,
    RegistrationComponent,
    AuthRegComponent,
    MainLayoutComponent,
    HomeComponent,
    StreamComponent,
    FeedComponent,
    LibraryComponent,
    ChooseFavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
