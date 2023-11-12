import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"",redirectTo:"dashboard",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"**",component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
