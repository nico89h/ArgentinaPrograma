import { Component, OnInit } from '@angular/core';
import { Item } from "../../modelos/item";
import { ItemService } from "../../services/item.service";
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  //comienzo la definicion de variables
  items: Item[]=[];//arreglo vacio
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.items=this.itemService.getItems();
    this.getTotal();
  }
  deleteItem(item:Item){
    this.items=this.items.filter(x=> x.id != item.id);
    this.getTotal();
  }
  total:number=0;
  getTotal(){
    this.total=this.items.filter(x=> !x.completed).map(x=> x.quantity * x.prince).reduce((acc,item)=>acc+=item,0);
  }
  toggleItem(item:Item){
    this.getTotal();
  }
}
