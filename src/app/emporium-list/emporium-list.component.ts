import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirestoreDbServiceService } from '../services/firestore-db-service.service';

@Component({
  selector: 'app-emporium-list',
  templateUrl: './emporium-list.component.html',
  styleUrls: ['./emporium-list.component.css'],
  providers: [ 
    FirestoreDbServiceService
  ]
})
export class EmporiumListComponent implements OnInit {

  @Output() onItemSelected: EventEmitter<IUser>;

  // variables
  userDbData: IUser[];

  private currentItem: IUser;

  constructor(private _firestoreBookService: FirestoreDbServiceService) { 
    this.onItemSelected = new EventEmitter();
  }

  clicked(item: IUser): void {
    this.currentItem = item;
    this.onItemSelected.emit(item);
  }
  
  isSelected(item: IUser): boolean {
    if (!item || !this.currentItem) {
      return false;
    }
    return item.libraryName === this.currentItem.libraryName;
  }

  ngOnInit() {
    this._firestoreBookService.getUserData().subscribe(userDbData => 
      {this.userDbData = userDbData});
  }

}
