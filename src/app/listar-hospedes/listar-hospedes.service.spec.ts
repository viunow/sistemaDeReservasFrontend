import { TestBed } from '@angular/core/testing';

import { ListarHospedesService } from './listar-hospedes.service';

describe('ListarHospedesService', () => {
  let service: ListarHospedesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarHospedesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
