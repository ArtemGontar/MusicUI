
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { StreamComponent } from './stream/stream.component';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
    {
      path: '',  component: MainLayoutComponent, children: [
        { path: 'home', component: HomeComponent },
        { path: 'feed', component: StreamComponent },
        { path: 'library', component: LibraryComponent },
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainLayoutRoutingModule {
}