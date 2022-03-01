/*Servicio para la consulta de los datos de las peliculas que estaran en la pagina de inicio*/
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
    const api: string = environment.direccionURLAPI;
    const ruta: string = api + "films/" //Se limpia la ruta para facilitar la lectura del codigo

    return this.http.get(ruta)
    .pipe(map((datos: any) => datos.results)); //Se realiza el mapeo para que solamente obtengamos el
                                               //array de las peliculas
  }
}
