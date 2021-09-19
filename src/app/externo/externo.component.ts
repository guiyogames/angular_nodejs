import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
// recibimos los datos de peticiones.service para poder verlos en la consola
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService] // Creamos el providers y le pasamos [PeticionesService]
}) // Capturamos los datos de peticiones.service.ts
export class ExternoComponent implements OnInit {
 public user: any; 

 public new_user:any; 

// Creamos la variable dentro del constructor _peticionesService, importamos PeticionesService
  constructor(
    private _peticionesServices: PeticionesService
  ) { 
   this.new_user ={
     "name":"",
     "job":""
}; 

  }

  ngOnInit() {
   this._peticionesServices.getUser().subscribe(
   result =>{
     this.user = result;
// console.log, nos saca el resultado en consola.     
     console.log(result);
// Debajo del ngOnInit capturamos con el this.petici... y capturamos getUser()
   },
// Dentro de el médodo subscribe(colocamos result y error)   
   error => {
     console.log(<any>error); 
   }

   );
  
  }

}
