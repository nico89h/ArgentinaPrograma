import { Component, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/modelos/item';
//import { EventEmitter } from 'stream';
//import { } from "module";
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item:Item=new Item();
  @Output() deleteItem: EventEmitter<Item> =new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  //funcion para eliminar
  onDelete(item:Item){
    this.deleteItem.emit(item);
  }
  //cambia el estado
  onToggle(item :Item){
    item.completed= !item.completed;
    this.toggleItem.emit(item);
  }

}
