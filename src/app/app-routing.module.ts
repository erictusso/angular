import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importamos el componente de /nosotros
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

//Aca declaramos las rutas
const routes: Routes = [
  { path: "nosotros" , component:NosotrosComponent},

  { path: "contacto" , component:ContactoComponent },

  { path: "inicio" , component:InicioComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
