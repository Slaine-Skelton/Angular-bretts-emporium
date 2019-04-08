import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-mylibrary',
  templateUrl: './mylibrary.component.html',
  styleUrls: ['./mylibrary.component.css']
})
export class MylibraryComponent implements OnInit {

  

  constructor(private userService: UserDataService) { 
    this.userService.setLibrary(true);
  }

  ngOnInit() {
    
  }


}
