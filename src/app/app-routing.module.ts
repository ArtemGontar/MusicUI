import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './auth-reg/auth-reg.module#AuthRegModule'},
  { path: 'home', loadChildren: './main-layout/main-layout.module#MainLayoutModule'},
  // { path: 'main', component: MainLayoutComponent, children: [
  //   { path: '', redirectTo: 'home', pathMatch: 'full', outlet: "main" },
  //   { path: 'home', component: HomeComponent, outlet: "main" },
  //   { path: 'feed', component: FeedComponent, outlet: "main" },
  //   { path: 'library', component: LibraryComponent, outlet: "main" },
  // ]},
  // { path: 'auth', component: AuthRegComponent, children: [
  //   { path: 'authorization', component: AuthorizationComponent, outlet: "auth" },
  //   { path: 'registration', component: RegistrationComponent, outlet: "auth" }
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
