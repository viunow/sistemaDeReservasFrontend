import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarQuartoComponent } from './cadastrar-quarto.component';

describe('CadastrarQuartoComponent', () => {
  let component: CadastrarQuartoComponent;
  let fixture: ComponentFixture<CadastrarQuartoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarQuartoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarQuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
