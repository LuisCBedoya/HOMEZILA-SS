import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarTransporteComponent } from './gestionar-transporte.component';

describe('GestionarTransporteComponent', () => {
  let component: GestionarTransporteComponent;
  let fixture: ComponentFixture<GestionarTransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarTransporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
