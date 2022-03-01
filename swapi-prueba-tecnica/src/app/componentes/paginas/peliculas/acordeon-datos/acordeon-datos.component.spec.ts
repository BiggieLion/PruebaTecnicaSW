import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordeonDatosComponent } from './acordeon-datos.component';

describe('AcordeonDatosComponent', () => {
  let component: AcordeonDatosComponent;
  let fixture: ComponentFixture<AcordeonDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcordeonDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordeonDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
