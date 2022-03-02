/*Servicio para consultar los datos de la pelicula seleccionada por el usuario*/
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { environment } from "@environment/environment";
import { Pelicula } from '../interfaces/pelicula.interfaz';


@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculaService {

  constructor(private http: HttpClient) { }


  /* Funcion para recuperar la informacion del API de la pelicula al darle click */
  obtenerDetallesPelicula(numEpisodio: number) {
    const api: string = environment.direccionURLAPI;
    const ruta: string = api + "films/" + `${numEpisodio}`;
    return this.http.get<Pelicula>(ruta);
  }

  obtenerURLPersonajes(numEpisodio: number) {
    const api: string = environment.direccionURLAPI;
    const ruta: string = api + "films/" + `${numEpisodio}`;
    return this.http.get<Pelicula>(ruta).pipe(
      map(res => {
        return res.characters
      })
    );
  }

  obtenerURLPlanetas(numEpisodio: number) {
    const api: string = environment.direccionURLAPI;
    const ruta: string = api + "films/" + `${numEpisodio}`;
    return this.http.get<Pelicula>(ruta).pipe(
      map(res => {
        return res.planets
      })
    );
  }

  obtenerURLVehiculos(numEpisodio: number) {
    const api: string = environment.direccionURLAPI;
    const ruta: string = api + "films/" + `${numEpisodio}`;
    return this.http.get<Pelicula>(ruta).pipe(
      map(res => {
        return res.vehicles
      })
    );
  }
}
