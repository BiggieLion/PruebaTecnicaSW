import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../interfaces/vehiculo.interfaz';

@Injectable({
  providedIn: 'root'
})
export class ServicioVehiculoService {

  constructor(private http: HttpClient) { }

  obtenerDetallesVehiculo(url: string) {
    return this.http.get<Vehiculo>(url);
  }
}
