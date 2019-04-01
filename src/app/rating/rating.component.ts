import { Component, OnInit, Input } from '@angular/core';
import { EmporiumItem } from '../emporiumItem.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() emporiumItem: EmporiumItem;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
