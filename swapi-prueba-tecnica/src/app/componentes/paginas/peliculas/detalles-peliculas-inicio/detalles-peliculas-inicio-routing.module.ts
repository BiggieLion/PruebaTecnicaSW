import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPeliculasInicioComponent } from './detalles-peliculas-inicio.component';

const routes: Routes = [{ path: '', component: DetallesPeliculasInicioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesPeliculasInicioRoutingModule { }
