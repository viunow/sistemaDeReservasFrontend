import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';

@Component({
  selector: 'app-dialog-editar',
  templateUrl: './dialog-editar.component.html',
  styleUrls: ['./dialog-editar.component.css']
})
export class DialogEditarComponent implements OnInit {

  public reserva: Reserva;
  constructor() { }

  ngOnInit(): void {
    this._reservaService.ObterPorID(this.data.reservaID)
  }

}
