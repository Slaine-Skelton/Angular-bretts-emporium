import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-userlibrary',
  templateUrl: './userlibrary.component.html',
  styleUrls: ['./userlibrary.component.css']
})
export class UserlibraryComponent implements OnInit {
  
  emporiumItem: IUser;

  constructor(private UserService: UserDataService) {
    
  }

  ngOnInit() {
    this.emporiumItem = this.UserService.getUser();
  }

}
