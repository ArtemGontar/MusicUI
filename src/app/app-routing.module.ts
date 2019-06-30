import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './auth-reg/authorization/authorization.component';
import { RegistrationComponent } from './auth-reg/registration/registration.component';
import { SuggestionBoxComponent } from './main-layout/home/suggestion-box/suggestion-box.component';

const routes: Routes = [
  { path: '', redirectTo: '/authorization', pathMatch: 'full' },
  { path: 'home', component: SuggestionBoxComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
