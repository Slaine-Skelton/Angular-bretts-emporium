import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from "../book.model"

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() bookList: Book[];
  @Output() onItemSelected: EventEmitter<Book>;

  private currentItem: Book;

  constructor() { 
    this.onItemSelected = new EventEmitter();
  }

  clicked(item: Book): void {
    this.currentItem = item;
    this.onItemSelected.emit(item);
  }
  
  isSelected(item: Book): boolean {
    if (!item || !this.currentItem) {
      return false;
    }
    return item.title === this.currentItem.title;
  }

  ngOnInit() {
  }

}
