import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ListarHospedesService {

  private hospedes: any[] = [
    { id: 1, nomeCompleto: 'Test One', pendencia: false },
    { id: 2, nomeCompleto: 'Test Two', pendencia: true },
    { id: 3, nomeCompleto: 'Test Three', pendencia: false }
  ];

  getHospedes() {
    return this.hospedes;
  }

  constructor() { }
}
