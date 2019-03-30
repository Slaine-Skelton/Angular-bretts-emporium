import { Component, OnInit, Input } from '@angular/core';
import { EmporiumItem } from '../emporiumItem.model';

@Component({
  selector: 'app-emporium-list',
  templateUrl: './emporium-list.component.html',
  styleUrls: ['./emporium-list.component.css']
})
export class EmporiumListComponent implements OnInit {

  @Input() emporiumList: EmporiumItem[];

  constructor() { }

  ngOnInit() {
  }

}
