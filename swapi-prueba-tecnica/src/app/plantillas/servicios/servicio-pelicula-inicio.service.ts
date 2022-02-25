import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '@environment/environment';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculaInicioService {

  constructor(private http: HttpClient) { }

  /*Funcion para obtener los detalles de la pelicula al inicio*/
  obtenerDetallesPeliculaInicio(): Observable<any> {
    return this.http.get(`${environment.direccionURLAPI}/films/`)
    .pipe(map((datos: any) => datos.results));
  }
}
