import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadesNovoComponent } from './cidades-novo.component';

describe('CidadesNovoComponent', () => {
  let component: CidadesNovoComponent;
  let fixture: ComponentFixture<CidadesNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadesNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadesNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
