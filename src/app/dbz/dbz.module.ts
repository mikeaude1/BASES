import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListadoPersonajesComponent } from './components/listado-personajes/listado-personajes.component';
import { AgregarPersonajeComponent } from './components/AgregarPersonaje/AgregarPersonaje.component';




@NgModule({
  declarations: [MainPageComponent,
    ListadoPersonajesComponent,
    AgregarPersonajeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent,
  ]

})
export class DbzModule { }
