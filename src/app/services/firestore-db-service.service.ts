import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDbServiceService {

  booksDataCollection: AngularFirestoreCollection<IBookitem>;
  userDataCollection: AngularFirestoreCollection<IUser>;

  booksData: Observable<IBookitem[]>;
  usersData: Observable<IUser[]>;
  

  constructor(private _http: HttpClient, private _afs: AngularFirestore) 
  {
    this.booksDataCollection = _afs.collection<IBookitem>("books");
    this.userDataCollection = _afs.collection<IUser>("users");
  }

  /******************* BOOK STUFF ****************************/
  getBooksData(): Observable<IBookitem[]>{
    this.booksData = this.booksDataCollection.snapshotChanges().pipe(map( changes => {
      return changes.map(a => {
          const data = a.payload.doc.data() as IBookitem;
          const id = a.payload.doc.id;
          return { id, ...data };
      });
    }));

    this.booksData.subscribe(docs => {
      docs.forEach(doc => {
        //console.log(doc.id);
      })
    })
    return this.booksData;
  }

  addBooksData(book: IBookitem) : void {
    this.booksDataCollection.add(JSON.parse(JSON.stringify(book)));
  }

  editBooksData(userKey, value){
    value.id = value.id.toLowerCase();
    return this.booksDataCollection.doc(userKey).set(value);
  }

  deleteBook(userKey){
    return this.booksDataCollection.doc(userKey).delete();
  }
  
  /******************* USER STUFF ****************************/
  getUserData(): Observable<IUser[]>{
    this.usersData = this.userDataCollection.snapshotChanges().pipe(map( changes => {
      return changes.map(a => {
          const data = a.payload.doc.data() as IUser;
          const id = a.payload.doc.id;
          return { id, ...data };
      });
    }));

    this.usersData.subscribe(docs => {
      docs.forEach(doc => {
        //console.log(doc.id);
      })
    })
    return this.usersData;
  }

  addUserData(user: IUser) : void {
    this.userDataCollection.add(JSON.parse(JSON.stringify(user)));
  }

  editUserData(userKey, value){
    value.id = value.id.toLowerCase();
    return this.userDataCollection.doc(userKey).set(value);
  }

  deleteUser(userKey){
    return this.userDataCollection.doc(userKey).delete();
  }

}
