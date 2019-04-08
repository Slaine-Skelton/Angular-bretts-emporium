import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserDataService } from '../services/user-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private userService: UserDataService) { }

  itemWasSelected(item: IUser): void {
    this.userService.setUser(item);
    this.userService.setLibrary(false);
    this.router.navigate(['/userlibrary']);
  }

  ngOnInit() {
  }

}
