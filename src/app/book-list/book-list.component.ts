import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirestoreDbServiceService } from '../services/firestore-db-service.service';
import { Book } from '../book';
import { LoginDataService } from '../services/login-data.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [ 
    FirestoreDbServiceService
  ]
})
export class BookListComponent implements OnInit {

  bookDbData: IBookitem[];
  bookItem: IBookitem;
  hidden: string;
  hideDelete: string;
  noAccess: boolean;

  // message for save, edit, delete
  msg: string;
  msg2: string;
  hiddenMessage: string;

  @Input() isMyLibrary: boolean;
  @Output() onItemSelected: EventEmitter<IBookitem>;

  currentItem: IBookitem;
  editSelected: IBookitem;
  bookToDelete: IBookitem;
  // repeat above to select library item

  constructor(private _firestoreBookService: FirestoreDbServiceService, private loginService: LoginDataService, private userService: UserDataService) { 
    this.onItemSelected = new EventEmitter();
    // hide new book modal
    this.hidden = "hidden";
    this.hiddenMessage = "hidden";
    this.hideDelete = "hidden";
  }

  clicked(item: IBookitem): void {
    this.currentItem = item;
    this.onItemSelected.emit(item);
  }
  
  isSelected(item: IBookitem): boolean {
    if (!item || !this.currentItem) {
      return false;
    }
    return item.title === this.currentItem.title;
  }

  ngOnInit() {
    this._firestoreBookService.getBooksData().subscribe(bookDbData => 
      {this.bookDbData = bookDbData});

      if(this.userService.getLibrary() && !this.loginService.getStatus()){
        this.noAccess = true;
      }else{
        this.noAccess = false;
      }

  }

  //add a book
  addBook(evt){
    this.bookDbData.push(evt);
    this.addTheBook(evt);
    this.showMessage("add");
  }

  addTheBook( book: Book ):boolean
  {
    let tempBook:IBookitem;
    tempBook = book;
    this._firestoreBookService.addBooksData(tempBook);
    return false;
  }

  // edit book
  modifyBook(evt){
    let tempBook: Book;
    tempBook = evt;
    this.editSelected = tempBook;
    //console.log("parent edit selected: "+tempBook.title);
    this.hidden = "show";
  }

  editBook(evt){
    let tempBook:IBookitem;
    tempBook = evt;
    this._firestoreBookService.editBooksData(tempBook.id, tempBook);
    this.closeWindow();
    this.showMessage("edit");
  }

  confirmDeleteBook(evt){
    let tempBook: Book;
    tempBook = evt;
    this.bookToDelete = tempBook;
    this.hideDelete = "show";
  }

  // delete book
  deleteBook(evt){
    let tempBook: IBookitem;
    tempBook = evt;
    this._firestoreBookService.deleteBook(tempBook.id);
    this.bookToDelete = null;
    this.hideDelete = "hidden";
    this.showMessage("delete");
  }

  // close windows (edit, delete)
  closeWindow(){
    this.hidden = "hidden";
  }

  // show message
  showMessage(typeMsg: string){
    this.msg = "";
    this.msg2 = "";
    switch(typeMsg){
      case "add":
      this.msg = "Book added successfully";
      this.msg2 = "Your book has been saved to the library.";
      break;
      case "edit":
      this.msg = "Book edited successfully";
      this.msg2 = "Your book has been edited and saved to the library.";
      break;
      case "delete":
      this.msg = "Book Deleted";
      this.msg2 = "The book has been deleted from the library.";
      break;
    }
    this.hiddenMessage = "show";
  }

  //close message
  close(){
    this.hiddenMessage = "hidden";
  }
}
