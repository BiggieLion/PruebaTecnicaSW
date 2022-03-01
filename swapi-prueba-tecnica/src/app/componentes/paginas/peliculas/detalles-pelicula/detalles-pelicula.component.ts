import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Params } from '@angular/router';
import { Pelicula } from '@app/plantillas/interfaces/pelicula.interfaz';
import { ServicioPeliculaService } from '@app/plantillas/servicios/servicio-pelicula.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent implements OnInit {

  pelicula$: Observable<Pelicula>;
  public idPelicula: number;

  constructor(private rutaActiva: ActivatedRoute, private servicioPelicula: ServicioPeliculaService, private locacion: Location) { }

  ngOnInit(): void {
    //this.obtenerPelicula();
    this.rutaActiva.params.pipe(take(1)).subscribe(((params) => {
      const id = params['id'];
      console.log("id: ", id);
      
      console.log("id: ", id);
      
      switch(id) {
        case '1':
          this.idPelicula = 4;  
        break;

        case '2':
          this.idPelicula = 5;
        break;

        case '3':
          this.idPelicula = 6;
        break;

        case '4':
          this.idPelicula = 1;
        break;

        case '5':
          this.idPelicula = 2;
        break;

        case '6':
          this.idPelicula = 3;
        break;

        default:
          this.idPelicula = 0;
      }
      console.log("pelicuas: ", this.pelicula$);
      
      this.pelicula$ = this.servicioPelicula.obtenerDetallesPelicula(this.idPelicula);
      console.log("pelicula$: ", this.pelicula$);
    }));
  }

  /*obtenerPelicula(): void {
    if(this.rutaActiva.snapshot.paramMap.get('id') != null) {
      this.idPelicula = +this.rutaActiva.snapshot.params['id'];
      switch(this.idPelicula) {
        case 1:
          this.idPelicula = 4;  
        break;

        case 2:
          this.idPelicula = 5;
        break;

        case 3:
          this.idPelicula = 6;
        break;

        case 4:
          this.idPelicula = 1;
        break;

        case 5:
          this.idPelicula = 2;
        break;

        case 6:
          this.idPelicula = 3;
        break;

        default:
          this.idPelicula = 0;
      }
      this.servicioPelicula.obtenerDetallesPelicula(this.idPelicula)
      .subscribe(movie => {
        this.pelicula$ = movie;
      })
    }
  }*/
  regresarInicio(): void {
    this.locacion.back();
  }
}
