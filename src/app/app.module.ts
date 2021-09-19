import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { TotalComponent } from './components/total/total.component';
import { AdditemsComponent } from './components/additems/additems.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraPipe } from './pipes/calculadora.pipe';

import{HttpClientModule} from '@angular/common/http'; // Para peticiones a base de datos (AJAX)
import { ContactoComponent } from './contacto/contacto.component';
import { ExternoComponent } from './externo/externo.component';




// Importamos los módulos que vamos a utilizar en el proyecto.
@NgModule({
  declarations: [// Se declaran los componentes 
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemComponent,
    TotalComponent,
    AdditemsComponent,
    CalculadoraPipe,
    ContactoComponent,
    ExternoComponent,
    
     ],
  imports: [
    BrowserModule, // Se importar las clases que vamos a usar 
    AppRoutingModule, // Clase para Routing (conexión entre páginas)
    FormsModule,// Clase para formulario
    HttpClientModule // Clase para conectar base de datos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
