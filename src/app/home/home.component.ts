import { Component, OnInit } from '@angular/core';
import { EmporiumItem } from '../emporiumItem.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emporiumList: EmporiumItem[];

  constructor() { 

    this.emporiumList = [
      new EmporiumItem(
        "Crazy Reader",
        "/assets/images/4m.jpg",
        "Crazy Library",
        21,
        1
      ),

      new EmporiumItem(
        "Busy Reader",
        "/assets/images/4f.jpg",
        "Busy Library",
        4,
        3
      ),

      new EmporiumItem(
        "Nosey Reader",
        "/assets/images/2m.jpg",
        "Nosey Library",
        7,
        5
      ),
      new EmporiumItem(
        "Scary Reader",
        "/assets/images/3m.jpg",
        "Scary Library",
        21,
        2
      ),

      new EmporiumItem(
        "Serious Reader",
        "/assets/images/3f.jpg",
        "Serious Library",
        4,
        4
      ),

      new EmporiumItem(
        "Jumpy Reader",
        "/assets/images/2f.jpg",
        "Jumpy Library",
        7,
        5
      )
      ];

  }

  itemWasSelected(item: EmporiumItem): void {
    console.log('Item clicked: ', item);
  }

  ngOnInit() {
  }

}
