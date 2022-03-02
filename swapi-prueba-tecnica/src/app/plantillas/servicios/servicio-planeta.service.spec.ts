import { TestBed } from '@angular/core/testing';

import { ServicioPlanetaService } from './servicio-planeta.service';

describe('ServicioPlanetaService', () => {
  let service: ServicioPlanetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPlanetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
