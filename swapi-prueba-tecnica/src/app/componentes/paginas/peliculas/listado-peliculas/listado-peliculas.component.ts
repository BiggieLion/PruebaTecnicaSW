import { Component, OnInit } from '@angular/core';
import { PeliculaInicio } from '@app/plantillas/interfaces/peliculainicio.interfaz';
import { ServicioPeliculaInicioService } from '@app/plantillas/servicios/servicio-pelicula-inicio.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
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
