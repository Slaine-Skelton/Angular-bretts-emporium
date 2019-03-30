import { Component, OnInit, Input } from '@angular/core';
import { EmporiumItem } from '../emporiumItem.model';

@Component({
  selector: 'app-avatar-image',
  templateUrl: './avatar-image.component.html',
  styleUrls: ['./avatar-image.component.css']
})
export class AvatarImageComponent implements OnInit {

  @Input() emporiumItem: EmporiumItem;
  
  constructor() { }

  ngOnInit() {
  }

}
