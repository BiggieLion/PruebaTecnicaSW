/*Componente principal de la pagina HOME del proyecto */
import { Component } from '@angular/core';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(configuracion: NgbConfig) {
    configuracion.animation = true
  }
  title = 'Star Wars APP'
}
