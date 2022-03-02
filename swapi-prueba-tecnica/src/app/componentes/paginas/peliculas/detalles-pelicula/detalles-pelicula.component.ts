import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Params } from '@angular/router';
import { ServicioPeliculaService } from '@app/plantillas/servicios/servicio-pelicula.service';
import { of, take } from 'rxjs';
import { Personaje } from '@app/plantillas/interfaces/personaje.interfaz';
import { ServicioPersonajesService } from '@app/plantillas/servicios/servicio-personajes.service';
import { Planeta } from '@app/plantillas/interfaces/planeta.interfaz';
import { Vehiculo } from '@app/plantillas/interfaces/vehiculo.interfaz';
import { ServicioPlanetaService } from '@app/plantillas/servicios/servicio-planeta.service';
import { ServicioVehiculoService } from '@app/plantillas/servicios/servicio-vehiculo.service';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent implements OnInit {

  //Arrays para los datos
  public pelicula: any = [];
  public idPelicula: number;
  public personajes: Personaje[] = [];
  public planetas: Planeta[] = [];
  public vehiculos: Vehiculo[] = [];

  //Variables auxiliares
  public urlPersonajes: string[] = [];
  public urlPlanetas: string[] = [];
  public urlVehiculos: string[] = [];

  constructor(
    private rutaActiva: ActivatedRoute,
    private servicioPelicula: ServicioPeliculaService,
    private locacion: Location,
    private servicioPersonajes: ServicioPersonajesService,
    private servicioPlanetas: ServicioPlanetaService,
    private servicioVehiculos: ServicioVehiculoService) { }

  ngOnInit(): void {
    this.obtenerTodosLosDatos();
  }

  obtenerTodosLosDatos() {
    this.rutaActiva.params.pipe(take(1)).subscribe(((params) => {
      const id = params['id'];

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
      this.servicioPelicula.obtenerDetallesPelicula(this.idPelicula)
      .subscribe(pelicula$ => {
        this.pelicula = pelicula$
      })

      //Obteniendo la url de los personajes y sus datos
      this.servicioPelicula.obtenerURLPersonajes(this.idPelicula)
      .subscribe(persons => {
        this.urlPersonajes = persons

        for(let personaje of this.urlPersonajes) {
          this.servicioPersonajes.obtenerDetallesPersonajes(personaje)
          .subscribe(res => {
            this.personajes = [...this.personajes, res]
            this.personajes = this.personajes.sort();
          })
        }

      });

      //Obteniendo la URL de los planetas
      this.servicioPelicula.obtenerURLPlanetas(this.idPelicula)
      .subscribe(planets => {
        this.urlPlanetas = planets;

        for(let planeta of this.urlPlanetas) {
          this.servicioPlanetas.obtenerDetallesPlaneta(planeta)
          .subscribe(res => {
            this.planetas = [...this.planetas, res]
          })
        }
      })

      /*Obtener la URL de los vehiculos*/
      this.servicioPelicula.obtenerURLVehiculos(this.idPelicula)
      .subscribe(vehicles => {
        this.urlVehiculos = vehicles;

        for(let vehiculo of this.urlVehiculos) {
          this.servicioVehiculos.obtenerDetallesVehiculo(vehiculo)
          .subscribe(res => {
            this.vehiculos = [...this.vehiculos, res]
          })
        }
      })
    }));
  }

  /*Funcion para regresar al menu principal*/
  regresarInicio(): void {
    this.locacion.back();
  }
}
