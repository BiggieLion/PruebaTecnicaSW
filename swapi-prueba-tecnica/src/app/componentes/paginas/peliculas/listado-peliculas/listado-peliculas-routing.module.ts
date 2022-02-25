import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeliculasComponent } from './listado-peliculas.component';

const routes: Routes = [{ path: '', component: ListadoPeliculasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoPeliculasRoutingModule { }
