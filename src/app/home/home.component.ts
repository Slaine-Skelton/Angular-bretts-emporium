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
        3
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
        3
      )
      ];

  }

  itemWasSelected(item: EmporiumItem): void {
    console.log('Item clicked: ', item);
  }

  ngOnInit() {
  }

}
