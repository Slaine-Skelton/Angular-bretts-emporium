import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { LoginDataService } from '../services/login-data.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() bookItem: IBookitem;
  @Output() modifyBookEE: EventEmitter<any> = new EventEmitter();
  @Output() confirmDeleteBookEE: EventEmitter<any> = new EventEmitter();
  isOwner: boolean;

  book: Book;
  show: boolean;
  user: IUser;

  constructor(private loginService: LoginDataService, private userService: UserDataService) {
    
   }

  ngOnInit() {
    this.book = this.bookItem;
    this.show = false;
    if(this.bookItem != undefined){
      if(this.userService.getLibrary()){
        this.showDetails();
      }else{
        this.selectBookLibrary();
      }
    }
    
  }

  modifyBook(){
    this.modifyBookEE.emit(this.bookItem);
  }

  confirmDeleteBook(){
    this.confirmDeleteBookEE.emit(this.bookItem);
  }

  showDetails(){
    console.log("my library "+this.bookItem);
    if(this.loginService.getStatus()){
      this.user = this.loginService.getCurrentUser();
      
      let bookUserID: number;
      
      if( this.bookItem != undefined ){
      bookUserID = parseInt(this.bookItem.users);
      
        if(bookUserID == this.user.userID){
          this.isOwner = true;
          this.show = true;
        }
      }
    }
  }

  selectBookLibrary(){
    if(this.userService.getUser()){

      let bookUserID: number;
      bookUserID = parseInt(this.bookItem.users);

      if(bookUserID == this.userService.getUser().userID){
        console.log("user library");
        this.show = true;
      }
    }
  }

}
