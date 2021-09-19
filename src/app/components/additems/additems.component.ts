import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  /* Lo que viene a continuación va hacer el binding de datos 
  (Los datos viajan de la vista al modelo y del modelo a la vista)
  y se captura en additems.component.html
  */
  
  // Se programan las variables abajo de export class
  
  id:number =0;
  title:string='';
  price:number=0;
  quantity:number=0;

 // Crear la variable para ItemService y para Ruter 
  constructor(private ItemService: ItemService, private router:Router) { }

  ngOnInit(): void {
  }

  // La parte funciones se programan debajo del metodo ngOnInit()
  onSubmit(){
    const item = new Item(); 
    
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false; 

    //this.ItemService.addItem(item); 
    this.ItemService.addItem(item).subscribe(i => {
      this.router.navigate(['/']); 
    }); 
    
    
    /*this.ItemService.addItem(item).subscribe(i => {
      this.router.navigate(['/']);
    }); 
    */
  }

}
