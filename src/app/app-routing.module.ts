import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './auth-reg/authorization/authorization.component';
import { RegistrationComponent } from './auth-reg/registration/registration.component';
import { HomeComponent } from './main-layout/home/home.component';
import { FeedComponent } from './main-layout/feed/feed.component';
import { LibraryComponent } from './main-layout/library/library.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
