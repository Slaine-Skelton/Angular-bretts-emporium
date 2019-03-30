import { Component, OnInit, Input } from '@angular/core';
import { EmporiumItem } from '../emporiumItem.model';

@Component({
  selector: 'app-book-count',
  templateUrl: './book-count.component.html',
  styleUrls: ['./book-count.component.css']
})
export class BookCountComponent implements OnInit {

  @Input() emporiumItem: EmporiumItem;

  constructor() { }

  ngOnInit() {
  }

}
