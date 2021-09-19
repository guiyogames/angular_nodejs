import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
items: Item[] = []; // Creamos una variable item
total: number = 0; 

  constructor(private itemService:ItemService) { }

ngOnInit(): void {
// this.items =[]
// Se muda lo programado en esta sección y lo enviamos a item.service.ts (los objetos items)
 this.itemService.getItems().subscribe(data =>{
   this.items = data; 
 })
 this.getTotal();  

}

deleteItem(item: Item){
  this.items = this.items.filter(x => x.id != item.id);
  this.itemService.deleteItem(item).subscribe(); 
  // Función para eliminar los Items.
  this.getTotal();

}
  // Función imprimir el valor en pantalla (doom). 
toggleItem(item:Item)
{
  this.getTotal(); 

}
// Función para hacer la operación del valor total de los items
getTotal(){
  this.total = this.items
            .filter(x => !x.completed)
            .map(x => x.quantity * x.price) 
            .reduce((acc, item)=> acc += item, 0);
  }

}
