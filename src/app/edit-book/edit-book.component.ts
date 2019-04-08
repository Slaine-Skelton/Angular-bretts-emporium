import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { GooglebooksApiService} from 'src/app/services/googlebooks-api.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  @Output() editBookEE: EventEmitter<any> = new EventEmitter();
  @Output() editCloseBookEE: EventEmitter<any> = new EventEmitter();

  @Input() selectedBook: IBookitem;
  
  bookData: IBookResponse;
  errorMessage: string;
  

  constructor(private _googleBooksService: GooglebooksApiService) {
    
  }

  ngOnInit() {
    
  }

  editBook() : boolean {
    let tempBook = this.selectedBook;
    this.editBookEE.emit(tempBook);
    return false;
  }

  
  getBookDetails(): boolean {
    
    // this needs to be the book selected

    return false;
  }

  

  closeWindow(){
    this.editCloseBookEE.emit("close");
  }

}
