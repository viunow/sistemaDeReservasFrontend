import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetuarReservaComponent } from './efetuar-reserva.component';

describe('EfetuarReservaComponent', () => {
  let component: EfetuarReservaComponent;
  let fixture: ComponentFixture<EfetuarReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfetuarReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfetuarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
