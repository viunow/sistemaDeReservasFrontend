import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarHospedeComponent } from './cadastrar-hospede.component';

describe('CadastrarHospedeComponent', () => {
  let component: CadastrarHospedeComponent;
  let fixture: ComponentFixture<CadastrarHospedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarHospedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarHospedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
