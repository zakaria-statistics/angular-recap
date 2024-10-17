import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {EventService} from '../../../shared/services/EventService'
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit {
  @Input() wish! : WishItem;

  @Input() fullfilled! : boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  get cssClass(){
    //return this.fullfilled ? ['strikeout', 'text-muted'] : [];
    return {'strikeout text-muted': this.wish.isComplete}
  }
  constructor(private events: EventService){}

  ngOnInit(): void {
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
