import { Injectable } from '@angular/core';
import { Item } from '../modelos/item';
@Injectable({
  providedIn: 'root'

})
export class ItemService {
  items:Item[]=[{
    id:0,
    title:"manzana",
    prince:10.5,
    quantity:9,
    completed:false
  },
  {
    id:2,
    title:"pera",
    prince:10,
    quantity:2,
    completed:true
  }
  ];
  constructor() { }
  getItems(){
        
    return this.items;
  }
  addItem(item:Item){
    this.items.unshift(item);   
  }
}
