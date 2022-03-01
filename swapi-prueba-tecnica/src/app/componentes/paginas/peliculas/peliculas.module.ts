import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { DetallesPeliculaComponent } from '@peliculas/detalles-pelicula/detalles-pelicula.component';
import { DetallesPeliculasInicioComponent } from '@peliculas/detalles-peliculas-inicio/detalles-peliculas-inicio.component';
import { AcordeonDatosComponent } from './acordeon-datos/acordeon-datos.component';


const componentes = [DetallesPeliculaComponent, DetallesPeliculasInicioComponent, AcordeonDatosComponent]

@NgModule({
  declarations: [...componentes],
  imports: [CommonModule, RouterModule],
  exports: [...componentes],
})
export class PeliculasModule { }
