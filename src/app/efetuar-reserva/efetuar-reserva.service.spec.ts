import { TestBed } from '@angular/core/testing';

import { EfetuarReservaService } from './efetuar-reserva.service';

describe('EfetuarReservaService', () => {
  let service: EfetuarReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EfetuarReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
