import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPeliculaComponent } from './detalles-pelicula.component';

const routes: Routes = [{ path: '', component: DetallesPeliculaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesPeliculaRoutingModule { }
