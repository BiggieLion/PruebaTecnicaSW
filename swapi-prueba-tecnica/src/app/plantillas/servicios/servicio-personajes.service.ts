import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interfaz';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonajesService {

  constructor(private http: HttpClient) { }

  /*Funcion para obtener los datos de los personajes de cada pelicula*/
  obtenerDetallesPersonajes(ruta: string) {
    return this.http.get<Personaje>(ruta);
  }
}
