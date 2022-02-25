import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPeliculasInicioComponent } from './detalles-peliculas-inicio.component';

describe('DetallesPeliculasInicioComponent', () => {
  let component: DetallesPeliculasInicioComponent;
  let fixture: ComponentFixture<DetallesPeliculasInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPeliculasInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPeliculasInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
