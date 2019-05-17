import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPage } from './grafica.page';

describe('GraficaPage', () => {
  let component: GraficaPage;
  let fixture: ComponentFixture<GraficaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
