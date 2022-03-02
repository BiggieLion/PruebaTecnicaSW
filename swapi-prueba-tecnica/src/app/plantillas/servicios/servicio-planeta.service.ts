import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planeta } from '../interfaces/planeta.interfaz';

@Injectable({
  providedIn: 'root'
})
export class ServicioPlanetaService {

  constructor(private http: HttpClient) { }

  obtenerDetallesPlaneta(url: string) {
    return this.http.get<Planeta>(url);
  }
}
