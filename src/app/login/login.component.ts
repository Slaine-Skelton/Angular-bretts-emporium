import { Component, OnInit } from '@angular/core';
import { LoginDataService } from '../services/login-data.service';
import { FirestoreDbServiceService } from '../services/firestore-db-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ 
    FirestoreDbServiceService
  ]
})
export class LoginComponent implements OnInit {

  localUsername: string;
  localPassword: string;
  message: string;
  isLoggedIn: boolean;

  userDbData: IUser[];

  constructor(private router: Router, private loginService: LoginDataService, private _firestoreBookService: FirestoreDbServiceService) { 
    this.message = "";
  }

  ngOnInit() {
    this._firestoreBookService.getUserData().subscribe(userDbData => 
      {this.userDbData = userDbData});

    this.isLoggedIn = this.loginService.getStatus();
  }

  login(){
    let found = false;
    this.message = "";
    console.log(this.localUsername);
    this.userDbData.forEach(user => {
      if(user.username == this.localUsername && user.password == this.localPassword){
        this.loginService.setCurrentUser(user);
        this.loginService.loginUser();
        found = true;
        this.router.navigate(['/mylibrary']);
      }
    });
    if(!found){
      this.message = "Incorrect details";
    }
  }

  logout(){
    this.loginService.logoutUser();
    this.loginService.setCurrentUser(null);
    this.router.navigate(['/home']);
  }

}
