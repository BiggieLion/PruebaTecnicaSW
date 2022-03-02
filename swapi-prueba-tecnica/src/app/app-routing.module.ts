import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { //Se redireccionara cuando la ruta este "vacia"
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./componentes/paginas/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'detalles-pelicula/:id',
    loadChildren: () =>
      import(
        './componentes/paginas/peliculas/detalles-pelicula/detalles-pelicula.module'
      ).then((m) => m.DetallesPeliculaModule),
  },
  { path: 'detalles-peliculas-inicio', loadChildren: () => import('./componentes/paginas/peliculas/detalles-peliculas-inicio/detalles-peliculas-inicio.module').then(m => m.DetallesPeliculasInicioModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
