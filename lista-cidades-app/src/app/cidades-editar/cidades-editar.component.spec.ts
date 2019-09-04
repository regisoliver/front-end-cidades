import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadesEditarComponent } from './cidades-editar.component';

describe('CidadesEditarComponent', () => {
  let component: CidadesEditarComponent;
  let fixture: ComponentFixture<CidadesEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadesEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
