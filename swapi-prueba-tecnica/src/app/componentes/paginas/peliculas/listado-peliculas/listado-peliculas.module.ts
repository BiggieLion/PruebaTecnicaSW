import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoPeliculasRoutingModule } from './listado-peliculas-routing.module';
import { ListadoPeliculasComponent } from './listado-peliculas.component';


@NgModule({
  declarations: [
    ListadoPeliculasComponent
  ],
  imports: [
    CommonModule,
    ListadoPeliculasRoutingModule
  ]
})
export class ListadoPeliculasModule { }
