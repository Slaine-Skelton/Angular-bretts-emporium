import { Component, OnInit, Input } from '@angular/core';
import { EmporiumItem } from '../emporiumItem.model';

@Component({
  selector: 'app-emporium-box',
  templateUrl: './emporium-box.component.html',
  styleUrls: ['./emporium-box.component.css']
})
export class EmporiumBoxComponent implements OnInit {
  
  @Input() emporiumItem: EmporiumItem;

  constructor() { }

  ngOnInit() {
  }

}
