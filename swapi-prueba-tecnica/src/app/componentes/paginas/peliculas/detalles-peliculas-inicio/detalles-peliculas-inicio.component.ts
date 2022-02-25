import { Component, OnInit } from '@angular/core';
import { PeliculaInicio } from '@app/plantillas/interfaces/peliculainicio.interfaz';
import { ServicioPeliculaInicioService } from '@app/plantillas/servicios/servicio-pelicula-inicio.service';
import { take } from 'rxjs';

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

  private obtenerDatosDesdeServicio() {
    this.servicioPelicula.obtenerDetallesPeliculaInicio().subscribe(datos => {
      if(datos != null) {
        this.peliculasInicio = datos;
        console.log("Peliculas: ",this.peliculasInicio);
      } else {
        this.peliculasInicio = [];
      }
    })
  } 
}
