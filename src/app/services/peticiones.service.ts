import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; // Importamos el {Observable}
// Estos módulos nos permiten hacer peticiones AJAX a un servicio externo.

// HttpHeaders nos permite modificar las cabezeras. 

@Injectable()

export class PeticionesService {
  public url: string; // Creamos la var ulr de tipo string;

  // Dentro de () del constructor creamos la var http: y le pasamos el httpClient
  constructor(public _http: HttpClient) { 
  // Dentro de las llaves le pasamos https://reqres.in/
    this.url ="https://reqres.in/" 
  }
// Creamos la función que va a traer al usuario seleccionado getUser()
   getUser(): Observable<any>{// El método que será recibido en externo.component.ts
     return this._http.get(this.url+'api/users/2')
   }

   
  }


