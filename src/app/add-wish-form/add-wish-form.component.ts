import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent implements OnInit{

  @Output() addWish = new EventEmitter<WishItem>();

  constructor(){}
  ngOnInit(): void {
    
  }
  newWishText = '';

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }

}
