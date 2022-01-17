import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarQuartosComponent } from './listar-quartos.component';

describe('ListarQuartosComponent', () => {
  let component: ListarQuartosComponent;
  let fixture: ComponentFixture<ListarQuartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarQuartosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarQuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
