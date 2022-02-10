import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { ReservasService } from 'src/app/services/reservas-service';

@Component({
  selector: 'app-dialog-editar',
  templateUrl: './dialog-editar.component.html',
  styleUrls: ['./dialog-editar.component.css']
})
export class DialogEditarComponent implements OnInit {

  public reserva: Reserva;
  constructor(
    private reservasService: ReservasService
  ) { }

  ngOnInit(): void {
    // this.reservasService.ObterPorID(this.data.reservaID)
  }

}
