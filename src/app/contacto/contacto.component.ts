import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
// Variable debajo de export 
public usuario: ContactoUsuario;
// Variable que viaja desde contacto.usuario.ts 

  constructor() {
// El objeto se programa entre las llaves {} del constructor y capturamos datos de usuario.ts
   this.usuario = new ContactoUsuario ('','','',''); // Los string representan cada campo usuario.ts
   
   }

  ngOnInit() { // Debajo del ngOnInit() se programan las funciones necesarias.
  }
// Función para el envío del evento 
  onSubmit(){
    console.log("Evento Submit lanzado");
    console.log(this.usuario)
  }

}
