import { TestBed } from '@angular/core/testing';

import { ServicioPeliculaInicioService } from './servicio-pelicula-inicio.service';

describe('ServicioPeliculaInicioService', () => {
  let service: ServicioPeliculaInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPeliculaInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
