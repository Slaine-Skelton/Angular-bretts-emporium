import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MylibraryComponent } from './mylibrary/mylibrary.component';
import { UserlibraryComponent } from './userlibrary/userlibrary.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mylibrary', component: MylibraryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'userlibrary', component: UserlibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
