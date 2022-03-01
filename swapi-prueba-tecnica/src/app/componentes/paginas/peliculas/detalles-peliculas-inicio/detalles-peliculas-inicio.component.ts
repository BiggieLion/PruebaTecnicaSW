import { Component, OnInit } from '@angular/core';
import { PeliculaInicio } from '@app/plantillas/interfaces/peliculainicio.interfaz';
import { ServicioPeliculaInicioService } from '@app/plantillas/servicios/servicio-pelicula-inicio.service';

@Component({
  selector: 'app-detalles-peliculas-inicio',
  templateUrl: './detalles-peliculas-inicio.component.html',
  styleUrls: ['./detalles-peliculas-inicio.component.css']
})
export class DetallesPeliculasInicioComponent implements OnInit {

  public peliculasInicio: PeliculaInicio[] = [];

  constructor(private servicioPelicula: ServicioPeliculaInicioService) { }
  
  ngOnInit(): void {
    this.obtenerDatosDesdeServicio();
  }

  private obtenerDatosDesdeServicio(): void {
    this.servicioPelicula.obtenerDetallesPeliculaInicio().subscribe(datos => {
      if(datos != null) { //Se evualua que recibamos las peliculas correctamente
        this.peliculasInicio = datos;
      } else { //En caso de que no recibamos peliculas aun mantenemos el array de peliculas como vacio
        this.peliculasInicio = [];
      }
    })
  } 
}
