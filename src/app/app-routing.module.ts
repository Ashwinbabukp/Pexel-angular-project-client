import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { PhotoViewComponent } from './photo-view/photo-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
 {
  path: "" ,component:LandingPageComponent
 },
 {
  path: "login",component:LoginComponent
 },
 {
  path:"register",component:RegisterComponent
 },
 {
  path:"photoview",component:PhotoViewComponent
 },
 {
  path:"dashboard",component:DashboardComponent
 },
 {
  path:"admin",component:AdminComponent
 },
 {
  path:"adminlogin",component:AdminLoginComponent
 },
 {
  path:"**",component:PageNotfoundComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
