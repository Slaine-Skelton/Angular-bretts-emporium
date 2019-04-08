import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MylibraryComponent } from './mylibrary/mylibrary.component';
import { UserlibraryComponent } from './userlibrary/userlibrary.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mylibrary', component: MylibraryComponent, data: { breadcrumb: "My Library" } },
  {path: 'mylibrary/:user', component: MylibraryComponent, data: { breadcrumb: "My Library" }},
  { path: 'profile', component: ProfileComponent, data: { breadcrumb: "Profile" } },
  { path: 'userlibrary', component: UserlibraryComponent, data: { breadcrumb: "Member Library" } },
  { path: 'login', component: LoginComponent, data: { breadcrumb: "Login" } },
  { path: 'register', component: RegisterComponent, data: { breadcrumb: "Register" } },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
})
export class AppRoutingModule { }
