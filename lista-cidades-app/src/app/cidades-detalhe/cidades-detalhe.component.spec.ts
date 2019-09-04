import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadesDetalheComponent } from './cidades-detalhe.component';

describe('CidadesDetalheComponent', () => {
  let component: CidadesDetalheComponent;
  let fixture: ComponentFixture<CidadesDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadesDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadesDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
