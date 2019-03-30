import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MylibraryComponent } from './mylibrary/mylibrary.component';
import { UserlibraryComponent } from './userlibrary/userlibrary.component';
import { ProfileComponent } from './profile/profile.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { routing } from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmporiumListComponent } from './emporium-list/emporium-list.component';
import { AvatarImageComponent } from './avatar-image/avatar-image.component';
import { LibraryNameComponent } from './library-name/library-name.component';
import { BookCountComponent } from './book-count/book-count.component';
import { RatingComponent } from './rating/rating.component';
import { EmporiumBoxComponent } from './emporium-box/emporium-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MylibraryComponent,
    UserlibraryComponent,
    ProfileComponent,
    BreadcrumbsComponent,
    LoginComponent,
    RegisterComponent,
    EmporiumListComponent,
    AvatarImageComponent,
    LibraryNameComponent,
    BookCountComponent,
    RatingComponent,
    EmporiumBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
