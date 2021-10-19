import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioninventarioComponent } from './gestioninventario.component';

describe('GestioninventarioComponent', () => {
  let component: GestioninventarioComponent;
  let fixture: ComponentFixture<GestioninventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioninventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioninventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
