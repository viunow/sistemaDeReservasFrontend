import { Component, OnInit } from '@angular/core';
import { EfetuarReservaService } from './efetuar-reserva.service';

interface Hospede {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-efetuar-reserva',
  templateUrl: './efetuar-reserva.component.html',
  styleUrls: ['./efetuar-reserva.component.css']
})
export class EfetuarReservaComponent implements OnInit {

  hospedes: Hospede[] = [
    {value: 'user1', viewValue: 'Vinicius Neto'},
    {value: 'user2', viewValue: 'John Doe'},
    {value: 'user3', viewValue: 'Linus Torvalds'}
  ];

  private reservas: any[] = [];

  constructor(private efetuarReservaService: EfetuarReservaService) { }

  ngOnInit(): void {
    this.reservas = this.efetuarReservaService.getReservas();
  }

}
