import { Component, OnInit, Input } from '@angular/core';
import { EmporiumItem } from '../emporiumItem.model';

@Component({
  selector: 'app-library-name',
  templateUrl: './library-name.component.html',
  styleUrls: ['./library-name.component.css']
})
export class LibraryNameComponent implements OnInit {

  @Input() emporiumItem: EmporiumItem;

  constructor() { }

  ngOnInit() {
  }

}
