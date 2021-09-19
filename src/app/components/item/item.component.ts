import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
/* 
Padre: Llamamos componente padre al @Input() que envía los valores desde 

Hijo:
Llamamos componente hijo aquel componente que viaja desde un @Output(), El hijo tiene un dato y quiere hacerlo llegar al padre, 
genera un evento que puede ser capturado en el padre para realizar aquellas acciones que sean necesarias. 

*/
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item(); // Envía propiedades del componente padre al hijo
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter(); // Envía propiedades del componente hijo al padre
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();
// Llamamos al Output con el EventEmitter
  
  constructor() { }


  ngOnInit(): void {
  }
// Creamos la función para eliminar los items
  onDelete(item: Item){
    this.deleteItem.emit(item); 

  }
// Creamos la función para tachar los items completados
  onToggle(item: Item){
    item.completed = !item.completed;
    this.toggleItem.emit(item); 

  }

}
