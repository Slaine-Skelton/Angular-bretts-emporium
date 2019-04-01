import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmporiumItem } from '../emporiumItem.model';

@Component({
  selector: 'app-emporium-list',
  templateUrl: './emporium-list.component.html',
  styleUrls: ['./emporium-list.component.css']
})
export class EmporiumListComponent implements OnInit {

  @Input() emporiumList: EmporiumItem[];
  @Output() onItemSelected: EventEmitter<EmporiumItem>;

  private currentItem: EmporiumItem;

  constructor() { 
    this.onItemSelected = new EventEmitter();
  }

  clicked(item: EmporiumItem): void {
    this.currentItem = item;
    this.onItemSelected.emit(item);
  }
  
  isSelected(item: EmporiumItem): boolean {
    if (!item || !this.currentItem) {
      return false;
    }
    return item.libraryName === this.currentItem.libraryName;
  }

  ngOnInit() {
  }

}
