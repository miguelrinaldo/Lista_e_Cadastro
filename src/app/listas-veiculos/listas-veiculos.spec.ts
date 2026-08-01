import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasVeiculos } from './listas-veiculos';

describe('ListasVeiculos', () => {
  let component: ListasVeiculos;
  let fixture: ComponentFixture<ListasVeiculos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListasVeiculos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListasVeiculos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
