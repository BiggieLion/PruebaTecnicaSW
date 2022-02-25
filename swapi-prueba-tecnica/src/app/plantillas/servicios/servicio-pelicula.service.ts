import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "@environment/environment";
import { Pelicula } from '@plantillas/interfaces/pelicula.interfaz';

@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculaService {

  constructor(private http: HttpClient) { }

  /* Funcion para recuperar la informacion del API de la pelicula al darle click */
  obtenerDetallesPelicula(numEpisodio: number) { 
    return this.http.get<Pelicula>(`${environment.direccionURLAPI}/${numEpisodio}`);
  }
}
