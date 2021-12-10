import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EfetuarReservaService {

  private reservas: any[] = [
    { id: 1, nomeCompleto: 'Vinicius Neto', telefone: '13567', cpf: '191919', tipoQuarto: 'Luxo', disponibilidadeNoPeriodo: true },
    { id: 2, nomeCompleto: 'Ronaldinho', telefone: '12345', cpf: '818181', tipoQuarto: 'Convencional', disponibilidadeNoPeriodo: true },
    { id: 3, nomeCompleto: 'Bill Gates', telefone: '13465', cpf: '876756', tipoQuarto: 'Luxo', disponibilidadeNoPeriodo: true }
  ]

  getReservas() {
    return this.reservas;
  }

  constructor() { }
}
