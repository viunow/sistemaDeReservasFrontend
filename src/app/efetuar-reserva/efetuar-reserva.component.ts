import { Component, OnInit } from '@angular/core';
import { EfetuarReservaService } from './efetuar-reserva.service';

@Component({
  selector: 'app-efetuar-reserva',
  templateUrl: './efetuar-reserva.component.html',
  styleUrls: ['./efetuar-reserva.component.css']
})
export class EfetuarReservaComponent implements OnInit {

  private reservas: any[] = [];

  constructor(private efetuarReservaService: EfetuarReservaService) { }

  ngOnInit(): void {
    this.reservas = this.efetuarReservaService.getReservas();
  }

}
