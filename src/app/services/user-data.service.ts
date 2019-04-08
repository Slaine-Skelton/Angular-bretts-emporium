import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  user: IUser;
  isMyLibrary: boolean;

  setUser(user: IUser){
    this.user = user;
  }

  getUser(){
    return this.user;
  }

  getLibrary(){
    return this.isMyLibrary;
  }

  setLibrary(bool: boolean){
    this.isMyLibrary = bool;
  }

  constructor() { }
}
