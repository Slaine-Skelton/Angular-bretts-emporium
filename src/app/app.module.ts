import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MylibraryComponent } from './mylibrary/mylibrary.component';
import { UserlibraryComponent } from './userlibrary/userlibrary.component';
import { ProfileComponent } from './profile/profile.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MylibraryComponent,
    UserlibraryComponent,
    ProfileComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
