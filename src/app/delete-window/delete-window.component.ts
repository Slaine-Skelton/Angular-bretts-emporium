import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-delete-window',
  templateUrl: './delete-window.component.html',
  styleUrls: ['./delete-window.component.css']
})
export class DeleteWindowComponent implements OnInit {

  @Input() hideDelete: string;
  @Input() bookToDelete: IBookitem;
  @Output() deleteBookEE: EventEmitter<any> = new EventEmitter();

  constructor() { 
    this.hideDelete = "hidden";
  }

  ngOnInit() {
  }

  cancel(){
    this.hideDelete = "hidden";
  }

  deleteBook(){
    this.deleteBookEE.emit(this.bookToDelete);
  }
}
