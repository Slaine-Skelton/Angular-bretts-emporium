import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  isLoggedIn: boolean;
  currentUser: IUser;

  getStatus(){
    return this.isLoggedIn;
  }

  loginUser(){
    this.isLoggedIn = true;
  }

  logoutUser(){
    this.isLoggedIn = false;
  }

  setCurrentUser(user: IUser){
    this.currentUser = user;
  }

  getCurrentUser(){
    return this.currentUser;
  }

  constructor() { }
}
