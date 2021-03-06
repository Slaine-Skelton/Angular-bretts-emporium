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
import { RatingComponent } from './rating/rating.component';
import { EmporiumBoxComponent } from './emporium-box/emporium-box.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';

import { HttpClientModule } from "@angular/common/http";

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AddBookComponent } from './add-book/add-book.component';

import { FormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteWindowComponent } from './delete-window/delete-window.component';


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
    RatingComponent,
    EmporiumBoxComponent,
    BookListComponent,
    BookItemComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase,),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
