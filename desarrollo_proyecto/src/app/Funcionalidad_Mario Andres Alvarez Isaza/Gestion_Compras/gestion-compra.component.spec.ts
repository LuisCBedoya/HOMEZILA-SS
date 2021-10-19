import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCompraComponent } from './gestion-compra.component';

describe('GestionCompraComponent', () => {
  let component: GestionCompraComponent;
  let fixture: ComponentFixture<GestionCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
