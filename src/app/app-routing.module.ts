import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemsComponent } from './components/additems/additems.component';
import { ItemsComponent } from './components/items/items.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContactoUsuario } from './models/contacto.usuario';
import { ExternoComponent } from './externo/externo.component';
// Establecemos las rutas entre componentes a través de los patch (quedan linkeados)
const routes: Routes = [

{path: '', component: ItemsComponent},

{path: 'add', component: AdditemsComponent},  

{path: 'contacto', component: ContactoComponent},   

{path:'Usuario', component: ContactoUsuario},

{path:'externo', component: ExternoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
