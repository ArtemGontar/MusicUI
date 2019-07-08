import { AuthRegComponent } from "./auth-reg.component";
import { AuthorizationComponent } from "./authorization/authorization.component";
import { RegistrationComponent } from "./registration/registration.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',  component: AuthRegComponent, children: [
        { path: '', component: AuthorizationComponent },
        { path: 'login', component: AuthorizationComponent },
        { path: 'registration', component: RegistrationComponent },
        { path: '', redirectTo: 'login' },
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthRegRoutingModule {
}