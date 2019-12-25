import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './routing';

import { HomeComponent } from "./components/home/home.component";

// const routes: Routes = [
//   { path: "home", component: HomeComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes.getRoutes())],
  exports: [RouterModule]
})
export class AppRoutingModule { }
