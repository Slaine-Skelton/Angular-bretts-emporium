import { Component, OnInit } from '@angular/core';
import { LoginDataService } from '../services/login-data.service';
import { FirestoreDbServiceService } from '../services/firestore-db-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  user: IUser;
  isLoggedIn: boolean;
  confirm: string;
  hidden: string;

  constructor( private loginService: LoginDataService, private _firestoreBookService: FirestoreDbServiceService) {

  }

  ngOnInit() {
    if(this.loginService.getStatus()){
      this.isLoggedIn = this.loginService.getStatus();
      this.user = this.loginService.getCurrentUser();
    }

    this.hidden = "hidden";
  }


  updateUser(){
    this._firestoreBookService.editUserData(this.user.id, this.user);
    this.hidden = "show";
  }

  registered(){
    this.hidden = "hidden";
  }

}
