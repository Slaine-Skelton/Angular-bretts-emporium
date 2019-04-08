import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Book } from '../book';
import { GooglebooksApiService} from 'src/app/services/googlebooks-api.service';
import { UserDataService } from '../services/user-data.service';
import { LoginDataService } from '../services/login-data.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers: [
    GooglebooksApiService
  ]
})
export class AddBookComponent implements OnInit {

  @Output() addBookEE: EventEmitter<any> = new EventEmitter();
  
  bookData: IBookResponse;
  errorMessage: string;
  isOwner: boolean;

  authors: string;
  cover: string;
  description: string; 
  isbn10: number;
  publishDate: string;
  title: string;
  publisher: string;
  binding: string;
  amazonLink: string;
  userID: string;
  
  hidden: string;
  

  constructor(private loginService: LoginDataService, private _googleBooksService: GooglebooksApiService, private userService: UserDataService) {
    
   }

  ngOnInit() {
    this.emptyInputValues();
    this.hidden = "hidden";
    if(this.userService.getLibrary() && this.loginService.getStatus()){
      this.isOwner = true;
    }

  }

  addBook( ) : boolean {
    
    if(this.loginService.getCurrentUser()){
      this.userID = (this.loginService.getCurrentUser().userID)+"";
    }else{
      this.userID = "1"
    }
    let tempBook = new Book(this.authors, this.cover, this.description, this.isbn10, this.publishDate, this.title, this.publisher, this.binding, this.amazonLink, this.userID);
    this.addBookEE.emit(tempBook);
    this.removeModal();
    return false;
  }


  itemWasSelected(item: Book): void {
    console.log('Item clicked: ', item);
  }

  
  getBookDetails(): boolean {
    this._googleBooksService.getBookData(this.isbn10+"").subscribe(
      
      bookData => {
      this.bookData = bookData;
      console.log('getBookDetails: ' + this.bookData.items[0].volumeInfo.title);
      this.setInputData();
    },
    error => this.errorMessage = <any>error);
    return false;
  }

  emptyInputValues(){
    this.isbn10 = null;
    this.title = "";
    this.cover = "";
    this.description = "";
    this.publisher = "";
    this.publishDate = "";
    this.binding = "";
    this.amazonLink = "";
    this.authors = "";
  }

  setInputData(){
    this.title = this.bookData.items[0].volumeInfo.title;
    this.cover = this.bookData.items[0].volumeInfo.imageLinks.thumbnail;
    this.description = this.bookData.items[0].volumeInfo.description;
    this.publisher = this.bookData.items[0].volumeInfo.publisher;
    this.publishDate = this.bookData.items[0].volumeInfo.publishedDate;
    this.binding = this.bookData.items[0].volumeInfo.printType;
    this.amazonLink = "https://www.amazon.co.uk/s?k="+this.isbn10;
    
    // allow for the addition of multiple authors
    var counter = 1;
    this.authors = "";
    var authorArray = this.bookData.items[0].volumeInfo.authors;
    (authorArray).forEach(author => {
      this.authors += author;
      if(counter != authorArray.length){
        this.authors += ", "
      }
      counter++;
    });
    
  }

  addModal(){
    this.hidden ="show";
    this.cover = "/assets/images/placeholder.png";
  }

  removeModal(){
    this.hidden ="hidden";
    this.emptyInputValues();
  }
  
}
