import { Component, Input, OnInit } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit{
  
  @Input() wishes:WishItem[] = [];
  ngOnInit(): void {
  }
  constructor(){}
  
}
