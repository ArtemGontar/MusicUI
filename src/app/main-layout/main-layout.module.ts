import { NgModule } from '@angular/core';
import { SharedService } from '../services/sharedService/shared.service';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { StreamComponent } from './stream/stream.component';
import { PlayerComponent } from './player/player.component';
import { HeaderComponent } from './header/header.component';
import { SuggestionBoxComponent } from './home/suggestion-box/suggestion-box.component';
import { FeedComponent } from './feed/feed.component';
import { ChooseFavoriteComponent } from './home/choose-favorite/choose-favorite.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SuggestionBoxComponent,
        PlayerComponent,
        MainLayoutComponent,
        HomeComponent,
        StreamComponent,
        FeedComponent,
        LibraryComponent,
        ChooseFavoriteComponent
    ],
    imports: [
      MainLayoutRoutingModule,
      CommonModule,
      HttpClientModule,
    ],
    providers: [SharedService],
    bootstrap: [HomeComponent]
})

export class MainLayoutModule {
  }